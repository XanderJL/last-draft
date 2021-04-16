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
      <Box d={{ base: "none", md: "block" }}>
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
            p={{ base: "3rem 4rem", lg: "4rem 5.5rem" }}
            bg="blackAlpha.800"
            position={{ base: "absolute", "2xl": "relative" }}
            top={{ base: "calc(50vh - 32px)", "2xl": 0 }}
            transform={{
              base: "translateY(-50%)",
              "2xl": "translateX(-25%)",
            }}
            left={0}
            textShadow="2px 2px rgba(0,0,0,0.25)"
            className="has-text-white"
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
        </Hero>
      </Box>
      <Box d={{ base: "flex", md: "none" }} flexDir="column">
        <SanityImage
          image={heroImage.asset.id}
          options={{ maxWidth: 800 }}
          style={{ flex: 1 }}
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
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={8}>
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
