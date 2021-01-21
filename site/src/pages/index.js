import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
import { Box } from "@chakra-ui/react"

import Layout from "../components/Layout"
import Testimonials from "../components/TestimonialCarousel"
import ContactForm from "../components/Contact"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      newsLetterImage: file(
        relativePath: { eq: "index/newsletter-header.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3840, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homePage: sanityIndexPage {
        metaDescription
        _rawHeroCard
        contactHeading
        _rawContactBody
        heroImage {
          asset {
            fluid(maxWidth: 3840) {
              ...GatsbySanityImageFluid
            }
          }
          hotspot {
            x
            y
          }
        }
        cardsTitle
        _rawCards
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
  const newsLetterImage = data.newsLetterImage.childImageSharp.fluid
  const metaDescription = data.homePage.metaDescription
  const {
    _rawHeroCard,
    _rawCards,
    cardsTitle,
    contactHeading,
    _rawContactBody,
    testimonials,
  } = data.homePage
  const BlockRenderer = props => {
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
          className: `is-montserrat is-uppercase subtitle is-size-4 has-text-white is-spaced is-size-5-mobile`,
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
      landingCard: props => <span>{props.children}</span>,
      block: props => <p className="has-text-centered">{props.children}</p>,
    },
  }

  return (
    <Layout title="Home" description={metaDescription}>
      <Box d={{ base: "none", md: "block" }}>
        <Hero
          size="fullheight-with-navbar"
          fluid={headerImage.asset.fluid}
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
        <Img fluid={headerImage.asset.fluid} style={{ flex: 1 }} />
        <Box p="3rem 1.25rem" bg="black">
          <PortableText
            blocks={_rawHeroCard}
            serializers={{ types: { block: BlockRenderer } }}
          />
        </Box>
      </Box>
      <section className="section-ethical-storytelling">
        <div className="container is-widescreen">
          <div className="copy">
            <h1 className="title-heading has-text-centered is-montserrat is-size-4-mobile">
              {cardsTitle}
            </h1>
          </div>
          <div className="grid-wrapper">
            {_rawCards.map(card => (
              <div key={card._key} className="card-wrap">
                <Link to="/about">
                  <h2 className="is-size-3 is-size-4-mobile">{card.title}</h2>
                </Link>
                <PortableText blocks={card.body} serializers={serializers} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Hero fluid={newsLetterImage} size="fullheight">
        <Box
          maxW={{ base: "70ch", md: "85ch" }}
          p={{ base: "3rem 1.25rem", md: "5rem 3rem" }}
          m="0 auto"
          bg="rgba(0,0,0,0.80)"
        >
          <Testimonials testimonials={testimonials} />
        </Box>
      </Hero>
      <div className="section">
        <ContactForm title={contactHeading} body={_rawContactBody} />
      </div>
    </Layout>
  )
}

export default IndexPage
