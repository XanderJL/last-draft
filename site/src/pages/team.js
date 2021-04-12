import * as React from "react"
import { Box, Container, Grid, Heading, Link, Text } from "@chakra-ui/react"
import { graphql, Link as GatsbyLink } from "gatsby"
import SanityImage from "../components/SanityImage"
import Layout from "../components/Layout"

const Team = ({ data }) => {
  const { team } = data.sanityTeamPage

  return (
    <Layout title="Team">
      <Container
        p={{ base: "3rem 1.25rem", md: "5rem 1.25rem" }}
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
