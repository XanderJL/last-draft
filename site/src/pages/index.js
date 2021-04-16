import * as React from "react"
import { Link, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  VStack,
} from "@chakra-ui/react"
import SanityImage from "../components/SanityImage"
import Layout from "../components/Layout"
import Testimonials from "../components/TestimonialCarousel"
import ContactForm from "../components/Forms/ContactForm"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"
import { getGatsbyImageData } from "gatsby-source-sanity"
import { getImage } from "gatsby-plugin-image"
import sanityConfig from "../lib/sanityConfig"

const IndexPage = ({ data }) => {
  const headerImage = data.homePage.heroImage
  const newsLetterImage = getImage(data.newsLetterImage.childImageSharp)
  const metaDescription = data.homePage.metaDescription
  const {
    _rawHeroCard,
    cards,
    _rawCards,
    cardsTitle,
    contactHeading,
    _rawContactBody,
    testimonials,
  } = data.homePage

  cards.map((card) => {
    const raw = _rawCards.filter((rawCard) => rawCard._key === card._key)
    card._rawBody = raw[0].body
  })

  const BlockRenderer = (props) => {
    const { style = "normal" } = props.node

    if (style === "h1") {
      return (
        <Heading
          fontSize={{ base: "28px", md: "36px", lg: "48px" }}
          letterSpacing="0.4rem"
          pb="0.25rem"
        >
          {props.children}
        </Heading>
      )
    }
    if (style === "h2") {
      return (
        <Heading
          as="h2"
          fontSize={{ base: "14px", md: "18px", lg: "24px" }}
          fontWeight={400}
          letterSpacing="0.1rem"
        >
          {props.children}
        </Heading>
      )
    }

    if (style === "blockquote") {
      return <blockquote>- {props.children}</blockquote>
    }

    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }
  const serializers = {
    types: {
      landingCard: (props) => <span>{props.children}</span>,
      block: (props) => <p className="has-text-centered">{props.children}</p>,
    },
  }

  return (
    <Layout title="Home" description={metaDescription}>
      <Box d={{ base: "none", md: "block" }}>
        <Hero
          size="fullheight-with-navbar"
          image={getGatsbyImageData(
            headerImage.asset,
            { maxwidth: 1920 },
            sanityConfig
          )}
          styles={{
            ...imageHotspot(headerImage.hotspot),
            position: "relative",
          }}
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
            <PortableText
              blocks={_rawHeroCard}
              serializers={{ types: { block: BlockRenderer } }}
            />
          </Box>
        </Hero>
      </Box>
      <Box d={{ base: "flex", md: "none" }} flexDir="column">
        <SanityImage
          image={headerImage.asset}
          options={{ maxWidth: 1920 }}
          style={{ flex: 1 }}
        />
        <Box p="3rem 1.25rem" bg="black" color="white">
          <PortableText
            blocks={_rawHeroCard}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </Box>
      </Box>
      <Box as="section" p={{ base: "3rem 1.25rem", md: "7rem 1.25rem" }}>
        <Container maxW="container.xl">
          <VStack spacing={4}>
            <Heading textAlign="center" textTransform="uppercase">
              {cardsTitle}
            </Heading>
            <Grid
              templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(3, 1fr)" }}
              gap={12}
            >
              {cards.map((card) => {
                const { _key, title, _rawBody, service, icon } = card
                return (
                  <GridItem key={_key}>
                    <Link
                      to={`/services/for-business/#${service.slug.current}`}
                    >
                      <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon boxSize={125} viewBox="0 0 80 80" m={10}>
                          <image href={icon.asset.url} height="80" width="80" />
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
                    <PortableText blocks={_rawBody} serializers={serializers} />
                  </GridItem>
                )
              })}
            </Grid>
          </VStack>
        </Container>
      </Box>
      <Hero image={newsLetterImage} size="fullheight">
        <Box
          maxW={{ base: "70ch", md: "85ch" }}
          p={{ base: "3rem 1.25rem", md: "5rem 3rem" }}
          m="0 auto"
          bg="rgba(0,0,0,0.80)"
        >
          <Testimonials testimonials={testimonials} />
        </Box>
      </Hero>
      <div id="contact" className="section">
        <ContactForm title={contactHeading} body={_rawContactBody} />
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    newsLetterImage: file(relativePath: { eq: "index/newsletter-header.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 3840
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    homePage: sanityIndexPage {
      metaDescription
      _rawHeroCard
      contactHeading
      _rawContactBody
      heroImage {
        asset {
          _id
          url
        }
        hotspot {
          x
          y
        }
      }
      cardsTitle
      _rawCards
      cards {
        _key
        title
        icon {
          asset {
            _id
            url
          }
        }
        service {
          slug {
            current
          }
        }
      }
      testimonials {
        _rawTestimonial
        brandName
        brandRep
        repTitle
        brandUrl
        id
      }
    }
  }
`

export default IndexPage
