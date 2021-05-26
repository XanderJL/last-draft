import Layout from "@components/Layout"
import { groq } from "next-sanity"
import { getClient } from "@lib/sanity/sanity.server"
import Hero from "@components/Hero"
import { PortableText, serializers } from "@lib/sanity"
import { Box, Container, Heading, Flex, VStack, Text } from "@chakra-ui/react"
import Section from "@components/Section"
import { Image } from "@chakra-ui/image"
import HeroCard from "@components/Cards/HeroCard"

const ForBusiness = ({ data }) => {
  const { title, heroImage, heroCard, services } = data

  return (
    <Layout bg="gray.50">
      <Hero placeholder={heroImage?.metadata?.lqip} image={heroImage?.url}>
        <HeroCard>
          <PortableText blocks={heroCard} />
        </HeroCard>
      </Hero>
      <Container maxW="container.xl">
        <Section>
          <VStack spacing={12}>
            {services.map((service) => {
              const { _id, slug, image, imageAlt, body } = service

              return (
                <Flex
                  key={_id}
                  id={`#${slug}`}
                  direction={{ base: "column", md: "row" }}
                  boxShadow="lg"
                  borderRadius={2}
                  overflow="hidden"
                  bg="white"
                >
                  <Image
                    maxW={{ base: "100%", md: "40%" }}
                    maxH={{ base: "500px", md: "100%" }}
                    src={image?.url}
                    alt={imageAlt}
                    objectFit="cover"
                    bgImage={image?.metadata?.lqip}
                    bgSize="cover"
                    bgRepeat="no-repeat"
                  />
                  <Box p={{ base: "3rem 1.25rem", md: "3rem" }}>
                    <PortableText
                      blocks={body}
                      serializers={{
                        ...serializers,
                        types: {
                          ...serializers.types,
                          block: (props) => {
                            const { style = "normal" } = props.node

                            switch (style) {
                              case "h1":
                                return (
                                  <Heading as="h1" size="xl" pb="0.5rem">
                                    {props.children}
                                  </Heading>
                                )
                              case "h2":
                                return (
                                  <Heading as="h2" size="lg" pb="0.5rem">
                                    {props.children}
                                  </Heading>
                                )
                              case "h3":
                                return (
                                  <Heading as="h3" size="md" pb="0.5rem">
                                    {props.children}
                                  </Heading>
                                )
                              default:
                                return <Text pb="1rem">{props.children}</Text>
                            }
                          },
                        },
                      }}
                    />
                  </Box>
                </Flex>
              )
            })}
          </VStack>
        </Section>
      </Container>
    </Layout>
  )
}

// TODO: remove _id in query and return Sanity studio to using single services schema

const servicesPageQuery = groq`
  *[_type == "servicesPage" && _id == "entrepreneurServicesPage"]{
    _id,
    title,
    "heroImage": heroImage.asset->{
      metadata,
      url
    },
    heroCard,
    services[]->{
      _id,
      "slug": slug.current,
      "image": image.asset->{
        metadata,
        url
      },
      imageAlt,
      body
    }
  }[0]
`

export const getStaticProps = async () => {
  const data = await getClient().fetch(servicesPageQuery)

  return { props: { data } }
}

export default ForBusiness
