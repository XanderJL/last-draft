import * as React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
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
} from "@chakra-ui/react"

import Layout from "../components/Layout"
import SanityImage from "../components/SanityImage"
import Serializers from "../components/Serializers"
import imageHotspot from "../hooks/imageHotspot"
import EmployeeSocials from "../components/EmployeeSocials"

const Member = ({ data }) => {
  const {
    firstName,
    lastName,
    headshot,
    jobTitle,
    _rawQuote,
    _rawBio,
    _rawEducation,
    _rawProjects,
    socials,
  } = data.sanityEmployee

  const customSerializers = {
    ...Serializers,
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
              {_rawQuote && (
                <Box
                  color="gray.600"
                  py="1.25rem"
                  fontSize="lg"
                  fontStyle="italic"
                >
                  <PortableText blocks={_rawQuote} serializers={Serializers} />
                </Box>
              )}
              {_rawBio && (
                <PortableText blocks={_rawBio} serializers={Serializers} />
              )}
            </VStack>
            <VStack flex={1} w="100%" align="flex-start" pt="2rem" spacing={12}>
              {_rawProjects && (
                <VStack align="flex-start">
                  <Heading as="h2" size="md" textTransform="uppercase">
                    Areas of Expertise
                  </Heading>
                  <PortableText
                    blocks={_rawProjects}
                    serializers={customSerializers}
                  />
                </VStack>
              )}
              {_rawEducation && (
                <VStack align="flex-start">
                  <Heading as="h2" size="md" textTransform="uppercase">
                    Education
                  </Heading>
                  <PortableText
                    blocks={_rawEducation}
                    serializers={customSerializers}
                  />
                </VStack>
              )}
            </VStack>
          </GridItem>
          <GridItem colStart={{ base: 1, md: 2 }} rowStart={{ base: 1, md: 1 }}>
            <SanityImage
              image={headshot.asset.id}
              options={{ maxWidth: 1200 }}
              alt={`Headshot of  `}
              style={{
                width: "100%",
                height: "100%",
              }}
              imgStyle={headshot.hotspot && imageHotspot(headshot.hotspot)}
            />
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    sanityEmployee(slug: { current: { eq: $slug } }) {
      firstName
      lastName
      headshot {
        asset {
          url
          id
        }
        hotspot {
          x
          y
        }
      }
      jobTitle
      _rawQuote
      _rawBio
      _rawEducation
      _rawProjects
      socials {
        facebook
        instagram
        linkedin
        twitter
      }
    }
  }
`

export default Member
