import * as React from "react"
import { graphql, useStaticQuery, Link as GatsbyLink } from "gatsby"
import { Flex, Text, Heading, Link, Box } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

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
            asset
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
          const imageData = getGatsbyImageData(
            employee.headshot.asset,
            { maxWidth: 400 },
            sanityConfig
          )
          return (
            <Link
              as={GatsbyLink}
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              p="1rem"
              to={"/team#" + employee.slug.current}
              key={employee.id}
            >
              <Box
                boxSize="130px"
                fit="cover"
                align="50% 50%"
                borderRadius="full"
                _hover={{ opacity: 0.75 }}
              >
                <GatsbyImage image={imageData} />
              </Box>
              <Heading
                as="h2"
                size="sm"
                fontWeight={400}
                className="has-text-black has-text-centered"
                style={{ marginTop: "1rem" }}
              >
                <Text>{employee.firstName}</Text>
                <Text>{employee.lastName}</Text>
              </Heading>
            </Link>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default EmployeesCard
