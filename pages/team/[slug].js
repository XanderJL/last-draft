import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  VStack,
  List,
  ListItem,
  HStack,
  Image,
} from "@chakra-ui/react"
import { groq } from "next-sanity"
import { PortableText, serializers } from "@lib/sanity"
import Layout from "@components/Layout"
import { getClient } from "@lib/sanity.server"
import EmployeeSocials from "@components/EmployeeSocials"

const Member = ({ data }) => {
  const {
    firstName,
    lastName,
    headshot,
    jobTitle,
    quote,
    bio,
    education,
    projects,
    socials,
  } = data

  const customSerializers = {
    ...serializers,
    list: (props) => <List listStyleType="circle">{props.children}</List>,
    listItem: (props) => <ListItem>{props.children}</ListItem>,
  }

  return (
    <Layout>
      <Container
        display="flex"
        p={{ base: "3rem 1.25rem", md: "5rem 1.25rem" }}
        maxW="container.xl"
        flex={1}
      >
        <Grid
          flex={1}
          minH={{ base: "80vh", lg: "70vh" }}
          templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 8, md: 16 }}
        >
          <GridItem
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            colStart={{ base: 1 }}
            rowStart={{ base: 2, md: 1 }}
            pt={{ md: "3rem" }}
          >
            <VStack flex={1} maxW="70ch" align="flex-start" spacing={4}>
              <Box>
                <Heading textTransform="uppercase">
                  {firstName} {lastName}
                </Heading>
                <HStack align="center">
                  <Heading
                    as="h2"
                    size="md"
                    textTransform="uppercase"
                    color="gray.700"
                    lineHeight={1}
                  >
                    {jobTitle}
                  </Heading>
                  {socials && (
                    <EmployeeSocials socials={socials} color="gray.600" />
                  )}
                </HStack>
              </Box>
              {quote && (
                <Box
                  color="gray.600"
                  py="1.25rem"
                  fontSize="lg"
                  fontStyle="italic"
                >
                  <PortableText blocks={quote} serializers={serializers} />
                </Box>
              )}
              {bio && <PortableText blocks={bio} serializers={serializers} />}
            </VStack>
            <VStack flex={1} w="100%" align="flex-start" pt="2rem" spacing={12}>
              {projects && (
                <VStack align="flex-start">
                  <Heading as="h2" size="md" textTransform="uppercase">
                    Areas of Expertise
                  </Heading>
                  <PortableText
                    blocks={projects}
                    serializers={customSerializers}
                  />
                </VStack>
              )}
              {education && (
                <VStack align="flex-start">
                  <Heading as="h2" size="md" textTransform="uppercase">
                    Education
                  </Heading>
                  <PortableText
                    blocks={education}
                    serializers={customSerializers}
                  />
                </VStack>
              )}
            </VStack>
          </GridItem>
          <GridItem colStart={{ base: 1, md: 2 }} rowStart={{ base: 1, md: 1 }}>
            <Image
              w="100%"
              h="100%"
              src={headshot?.url}
              alt={`Headshot of  ${firstName} ${lastName}`}
              objectFit="cover"
              bgImage={headshot?.metadata?.lqip}
              bgSize="cover"
              bgRepeat="no-repeat"
            />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}
const employeesQuery = groq`*[_type == "employee"]{ "slug": slug.current }`
const singleEmployeeQuery = groq`
  *[_type == "employee" && slug.current == $slug]{
    firstName,
    lastName,
    "headshot": headshot.asset->{
      metadata,
      url
    },
    jobTitle,
    quote,
    bio,
    education,
    projects,
    socials[]
  }[0]
`

export const getStaticPaths = async () => {
  const employees = await getClient().fetch(employeesQuery)
  const paths = employees.map((employee) => ({
    params: { slug: employee.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const data = await getClient().fetch(singleEmployeeQuery, {
    slug: params.slug,
  })

  return { props: { data } }
}

export default Member
