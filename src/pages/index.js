import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"

import Layout from "../components/Layout"
import NewsLetter from "../components/NewsLetter"
import Testimonials from "../components/TestimonialCarousel"
import ContactForm from "../components/Contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      newsLetterImage: file(
        relativePath: { eq: "index/newsletter-header.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glassesImage: file(relativePath: { eq: "index/glasses-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      homePage: sanityIndexPage {
        _rawMetaDescription
        _rawHeroCard
        heroImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        cardsTitle
        _rawCards
      }
    }
  `)
  const headerImage = data.homePage.heroImage.asset.fluid
  const newsLetterImage = data.newsLetterImage.childImageSharp.fluid
  const heroCard = data.homePage._rawHeroCard
  const metaDescription = data.homePage._rawMetaDescription[0].children[0].text
  const cardsTitle = data.homePage.cardsTitle
  const cards = data.homePage._rawCards
  const BlockRenderer = props => {
    const { style = "normal" } = props.node

    if (style === "h1") {
      return React.createElement(
        style,
        {
          className: `is-montserrat is-uppercase title is-size-1 has-text-white is-spaced is-size-4-mobile`,
        },
        props.children
      )
    }
    if (style === "h2") {
      return React.createElement(
        style,
        {
          className: `is-montserrat is-uppercase subtitle is-size-3 has-text-white is-spaced is-size-5-mobile`,
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
      <BackgroundImage
        className="hero-landing is-fullheight-with-navbar"
        fluid={headerImage}
        style={{
          objectPosition: "60% 40%",
          backgroundAttachment: "fixed",
        }}
      >
        <Img
          fluid={headerImage}
          className="is-hidden-desktop"
          objectFit="contain"
          alt="Image of beer"
        />
        <div className="hero-body">
          <div className="container is-widescreen">
            <PortableText
              blocks={heroCard}
              serializers={{ types: { block: BlockRenderer } }}
            />
          </div>
        </div>
      </BackgroundImage>
      <section className="section-ethical-storytelling">
        <div className="container is-widescreen">
          <div className="copy">
            <h1 className="title-heading has-text-centered is-montserrat is-size-4-mobile">
              {cardsTitle}
            </h1>
          </div>
          <div className="grid-wrapper">
            {cards.map(card => (
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
      <NewsLetter image={newsLetterImage} />
      <Testimonials />
      <ContactForm inverted={true} />
    </Layout>
  )
}

export default IndexPage
