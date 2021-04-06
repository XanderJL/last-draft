import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      newsLetterImage: file(
        relativePath: { eq: "index/newsletter-header.jpg" }
      ) {
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
  `)
  const headerImage = data.homePage.heroImage
  console.log(headerImage.asset)
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
      return React.createElement(
        style,
        {
          className: `is-montserrat is-uppercase title is-size-2 has-text-white is-spaced is-size-4-mobile mb-1`,
        },
        props.children
      )
    }
    if (style === "h2") {
      return React.createElement(
        style,
        {
          className: `is-montserrat is-uppercase subtitle is-size-5 has-text-white is-spaced is-size-6-mobile`,
        },
        props.children
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
          image={
            getGatsbyImageData(headerImage, { maxwidth: 1920 }, sanityConfig)
              .asset
          }
          styles={imageHotspot(headerImage.hotspot)}
        >
          <Box
            maxW="max-content"
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
        <SanityImage image={headerImage} style={{ flex: 1 }} />
        <Box p="3rem 1.25rem" bg="black">
          <PortableText
            blocks={_rawHeroCard}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </Box>
      </Box>
      <Box as="section" p={{ base: "3rem 1.25rem" }}>
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
                const { _key, title, _rawBody, service } = card
                return (
                  <GridItem key={_key}>
                    <Link
                      to={`/services/for-business/#${service.slug.current}`}
                    >
                      <Heading
                        as="h2"
                        size="md"
                        textAlign="center"
                        textTransform="uppercase"
                      >
                        {title}
                      </Heading>
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

export default IndexPage
