import * as React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { Flex, Text, Heading, Link, Box } from "@chakra-ui/react"
import SanityImage from "./SanityImage"

const EmployeesCard = () => {
  const data = useStaticQuery(graphql`
    {
      sanityTeamPage {
        heading
        subheading
        team {
          id
          firstName
          lastName
          _rawBio
          _rawQuote
          headshot {
            asset {
              _id
              url
            }
          }
          jobTitle
          slug {
            current
          }
        }
      }
    }
  `)

  const teamPage = data.sanityTeamPage

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      maxW="xl"
      p="3rem 1.25rem"
      m="0 auto"
      className="card"
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight={400}
        textAlign="center"
        textTransform="uppercase"
        letterSpacing="0.10em"
        color="black"
      >
        {teamPage.heading}
      </Heading>
      <Heading
        as="h2"
        size="lg"
        m="0.75rem 0 3rem 0"
        fontWeight={400}
        textAlign="center"
        color="black"
      >
        {teamPage.subheading}
      </Heading>
      <Flex align="center" justify="center" flexWrap="wrap">
        {teamPage.team.map((employee) => {
          const { id, slug, headshot, firstName, lastName } = employee
          return (
            <Link
              as={GatsbyLink}
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              p="1rem"
              to={"/team#" + slug.current}
              key={id}
            >
              <Box
                boxSize="130px"
                fit="cover"
                align="50% 50%"
                borderRadius="full"
                overflow="hidden"
                _hover={{ opacity: 0.75 }}
              >
                <SanityImage
                  image={headshot.asset}
                  options={{ width: 400, height: 400 }}
                />
              </Box>
              <Heading
                as="h2"
                size="sm"
                fontWeight={400}
                className="has-text-black has-text-centered"
                style={{ marginTop: "1rem" }}
              >
                <Text>{firstName}</Text>
                <Text>{lastName}</Text>
              </Heading>
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default EmployeesCard
