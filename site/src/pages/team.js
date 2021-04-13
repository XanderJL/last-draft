import * as React from "react"
import { Box, Container, Grid, Heading, Link, Text } from "@chakra-ui/react"
import { graphql, Link as GatsbyLink } from "gatsby"
import SanityImage from "../components/SanityImage"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

const Team = ({ data }) => {
  const { team, heading, subheading, heroImage } = data.sanityTeamPage

  return (
    <Layout title="Team">
      <Hero
        size="fullheight-with-navbar"
        image={getGatsbyImageData(
          heroImage.asset.id,
          { maxWidth: 1440 },
          sanityConfig
        )}
        styles={imageHotspot(heroImage.hotspot)}
      >
        <Box
          maxW="max-content"
          p="1.25rem 2rem"
          bg="blackAlpha.700"
          textShadow="2px 2px rgba(0,0,0,0.25)"
          className="has-text-white"
        >
          <Heading as="h1" textTransform="uppercase" size="2xl">
            {heading}
          </Heading>
          <Heading as="h2" size="lg">{subheading}</Heading>
        </Box>
      </Hero>
      <Container
        p={{ base: "3rem 1.25rem", md: "7rem 1.25rem" }}
        maxW="container.xl"
      >
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
          {team.map((member) => {
            const { id, firstName, lastName, jobTitle, slug, headshot } = member
            return (
              <Link
                as={GatsbyLink}
                key={id}
                role="group"
                to={`/team/${slug.current}`}
                justifySelf="center"
              >
                <Box
                  mb="0.25rem"
                  maxW={300}
                  maxH={300}
                  _groupHover={{ opacity: 0.8 }}
                >
                  <SanityImage
                    image={headshot.asset.id}
                    options={{ maxWidth: 300 }}
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

export default Team

export const data = graphql`
  {
    sanityTeamPage {
      heading
      subheading
      heroImage {
        asset {
          id
          url
        }
        hotspot {
          x
          y
        }
      }
      team {
        id
        firstName
        lastName
        jobTitle
        slug {
          current
        }
        headshot {
          asset {
            url
            id
          }
        }
      }
    }
  }
`
