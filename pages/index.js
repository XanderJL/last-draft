import { groq } from "next-sanity"
import { getClient } from "@lib/sanity.server"
import Layout from "@components/Layout"
import Hero from "@components/Hero"
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react"
import { PortableText } from "@lib/sanity"
import Link from "@components/Link"
import ContactForm from "@components/Forms/ContactForm"

const Home = ({ data }) => {
  const {
    heroImage,
    heroCard,
    cards,
    cardsTitle,
    contactHeading,
    contactBody,
  } = data
  return (
    <Layout>
      <Hero placeholder={heroImage?.metadata?.lqip} image={heroImage?.url}>
        <Container maxW="container.xl" color="white" textShadow="2px 2px #000">
          <PortableText
            blocks={heroCard}
            serializers={{
              types: {
                block: (props) => {
                  const { style = "normal" } = props.node

                  switch (style) {
                    case "h1":
                      return (
                        <Heading
                          size="4xl"
                          textTransform="uppercase"
                          pb="0.5rem"
                        >
                          {props.children}
                        </Heading>
                      )
                    case "h2":
                      return (
                        <Heading
                          as="h2"
                          size="xl"
                          textTransform="uppercase"
                          pb="0.5rem"
                        >
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
        </Container>
      </Hero>
      <Container
        maxW="container.xl"
        p={{ base: "3rem 1.25rem", md: "7rem 1.25rem" }}
      >
        <VStack spacing={4}>
          <Heading textAlign="center" textTransform="uppercase">
            {cardsTitle}
          </Heading>
          <Grid
            templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(3, 1fr)" }}
            gap={12}
          >
            {cards.map((card) => {
              const { _key, title, body, service, icon } = card
              return (
                <GridItem key={_key} textAlign="center">
                  <Link href={`/services/#${service.slug}`}>
                    <Flex
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Icon boxSize={125} viewBox="0 0 80 80" m={10}>
                        <image href={icon.url} height="80" width="80" />
                      </Icon>
                      <Heading
                        as="h2"
                        size="md"
                        pb={2}
                        textAlign="center"
                        textTransform="uppercase"
                      >
                        {title}
                      </Heading>
                    </Flex>
                  </Link>
                  <PortableText blocks={body} />
                </GridItem>
              )
            })}
          </Grid>
        </VStack>
      </Container>
      <Hero minH="100vh">
        <Container maxW="container.xl">Bleep</Container>
      </Hero>
      <Container maxW="container.xl">
        <ContactForm title={contactHeading} body={contactBody} />
      </Container>
    </Layout>
  )
}

const homePageQuery = groq`
  *[_type == "indexPage"]{
    title,
    metaDescription,
    heroCard,
    contactHeading,
    contactBody,
    "heroImage": heroImage.asset->{
      url,
      metadata,
    },
    cardsTitle,
    cards[]{
      _key,
      title,
      body,
      "icon": icon.asset->{
        url,
        metadata,
      },
      service->{
        "slug": slug.current,
      },
    },
    testimonials[]->{
      testimonial,
      brandName,
      brandRep,
      repTitle,
      brandUrl,
      _id
    },
  }[0]
`

export const getStaticProps = async () => {
  const data = await getClient().fetch(homePageQuery)

  return { props: { data } }
}

export default Home
