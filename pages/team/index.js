import { Box, Container, Grid, Heading, Image, Text } from "@chakra-ui/react"
import Hero from "@components/Hero"
import Layout from "@components/Layout"
import { groq } from "next-sanity"
import { getClient } from "@lib/sanity/sanity.server"
import Link from "@components/Link"
import { urlFor } from "@lib/sanity"

const Team = ({ data }) => {
  const { team, heading, subheading, heroImage } = data

  return (
    <Layout title={heading}>
      <Box d={{ base: "none", md: "block" }}>
        <Hero
          placeholder={heroImage?.metadata?.lqip}
          image={heroImage?.url}
          minH="calc(100vh - 67px)"
        >
          <Container maxW="container.xl">
            <Box
              maxW="max-content"
              textShadow="2px 2px rgba(0,0,0,0.25)"
              color="white"
              position="relative"
              zIndex={0}
              _after={{
                zIndex: -1,
                content: "''",
                position: "absolute",
                w: "100vw",
                h: "100%",
                p: "6rem",
                top: "50%",
                right: "0",
                transform: "translate(5%, -50%)",
                bg: "blackAlpha.800",
              }}
            >
              <Heading
                as="h1"
                textTransform="uppercase"
                fontSize={{ base: "28px", md: "36px", lg: "48px" }}
                letterSpacing="0.4rem"
                pb="0.25rem"
              >
                {heading}
              </Heading>
              <Heading
                as="h2"
                fontSize={{ base: "14px", md: "18px", lg: "24px" }}
                fontWeight={400}
                letterSpacing="0.1rem"
              >
                {subheading}
              </Heading>
            </Box>
          </Container>
        </Hero>
      </Box>
      <Box d={{ base: "flex", md: "none" }} flexDir="column">
        <Image
          flex={1}
          maxW={800}
          src={heroImage?.url}
          objectFit="cover"
          objectPosition="center"
          bgImage={heroImage?.metadata?.lqip}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        />
        <Box p="3rem 1.25rem" bg="black" color="white">
          <Heading
            as="h1"
            textTransform="uppercase"
            size="2xl"
            letterSpacing="0.4rem"
            pb="0.25rem"
          >
            {heading}
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "18px", md: "24px" }}
            fontWeight={400}
            letterSpacing="0.1rem"
          >
            {subheading}
          </Heading>
        </Box>
      </Box>
      <Container
        p={{ base: "3rem 1.25rem", md: "7rem 1.25rem" }}
        maxW="container.xl"
      >
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={8}>
          {team.map((member) => {
            const { _id, firstName, lastName, jobTitle, slug, headshot } =
              member
            return (
              <Link
                key={_id}
                role="group"
                href={`/team/${slug}`}
                justifySelf="center"
              >
                <Box
                  mb="0.25rem"
                  _groupHover={{ opacity: 0.8 }}
                  overflow="hidden"
                >
                  <Image
                    src={urlFor(headshot?.url).width(400).height(400)}
                    objectFit="cover"
                    objectPosition="center"
                    bgImage={headshot?.metadata?.lqip}
                    bgSize="cover"
                    bgPosition="center"
                    alt={(firstName, " ", lastName)}
                  />
                </Box>
                <Heading as="h2" size="md" textTransform="uppercase">
                  {firstName} {lastName}
                </Heading>
                <Text
                  color="gray.600"
                  fontFamily="heading"
                  textTransform="uppercase"
                >
                  {jobTitle}
                </Text>
              </Link>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

const teamPageQuery = groq`
  *[_type == "teamPage"]{
    heading,
    subheading,
    "heroImage": heroImage.asset->{
      metadata,
      url
    },
    team[]->{
      _id,
      firstName,
      lastName,
      jobTitle,
      "slug": slug.current,
      "headshot": headshot.asset->{
        metadata,
        url
      }
    }
  }[0]
`

export const getStaticProps = async () => {
  const data = await getClient().fetch(teamPageQuery)
  return { props: { data } }
}

export default Team
