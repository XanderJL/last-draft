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
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import Layout from "../components/Layout"
import SanityImage from "../components/SanityImage"
import Serializers from "../components/Serializers"
import imageHotspot from "../hooks/imageHotspot"

const Member = ({ data }) => {
  const {
    firstName,
    lastName,
    headshot,
    jobTitle,
    _rawQuote,
    _rawBio,
    socials,
  } = data.sanityEmployee

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
          templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 8, md: 16 }}
        >
          <GridItem
            display="flex"
            colStart={{ base: 1 }}
            rowStart={{ base: 2, md: 1 }}
            pt={{ md: "3rem" }}
          >
            <Tabs
              display="flex"
              flexDirection="column"
              size="lg"
              isFitted
              colorScheme="cyan"
            >
              <TabPanels flex={1}>
                <TabPanel>
                  <VStack maxW="70ch" align="flex-start" spacing={4}>
                    <Box>
                      <Heading textTransform="uppercase">
                        {firstName} {lastName}
                      </Heading>
                      <Heading
                        as="h2"
                        size="md"
                        textTransform="uppercase"
                        color="gray.600"
                      >
                        {jobTitle}
                      </Heading>
                    </Box>
                    <Box color="gray.400" py="1.25rem" fontSize="lg" fontStyle="italic">
                      <PortableText
                        blocks={_rawQuote}
                        serializers={Serializers}
                      />
                    </Box>
                    <PortableText blocks={_rawBio} serializers={Serializers} />
                  </VStack>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </TabPanels>
              <TabList>
                <Tab>Bio</Tab>
                <Tab>Projects</Tab>
                <Tab>Education</Tab>
              </TabList>
            </Tabs>
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
