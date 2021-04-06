import * as React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { Box, Link } from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import Layout from "../components/Layout"
import Brands from "../components/Brands"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"
import SanityImage from "../components/SanityImage"
import sanityConfig from "../lib/sanityConfig"
import { getGatsbyImageData } from "gatsby-source-sanity"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutPage: sanityAboutPage {
        _rawMetaDescription
        title
        _rawHeroCard
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
        _rawSectionOne
        _rawPublication
        sectionOne {
          image {
            asset {
              _id
              url
            }
          }
        }
        publication {
          image {
            asset {
              _id
              url
            }
          }
          alt
        }
      }
    }
  `)

  const CardRenderer = (props) => {
    const { style = "normal" } = props.node

    if (style === "h1") {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black`,
        },
        props.children
      )
    }
    if (style === "h2") {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black`,
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

  const SectionRenderer = (props) => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black is-size-4-mobile`,
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
  const BlockImageRenderer = (props) => {
    const urlFor = (source) =>
      imageUrlBuilder({
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      }).image(source)
    return (
      <Link
        as={GatsbyLink}
        role="button"
        to="/stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={urlFor(props.node.image.asset).maxWidth(400)}
          alt={props.node.alt}
        />
      </Link>
    )
  }

  const title = data.aboutPage.title
  const metaDescription = data.aboutPage._rawMetaDescription[0].children[0].text
  const heroImage = getGatsbyImageData(
    data.aboutPage.heroImage.asset,
    { maxWidth: 1440 },
    sanityConfig
  )
  const heroHotspot = data.aboutPage.heroImage.hotspot
  const heroCard = data.aboutPage._rawHeroCard
  const sectionOne = data.aboutPage._rawSectionOne.body
  const sectionOneImg = data.aboutPage.sectionOne.image.asset
  const sectionOneAlt = data.aboutPage.sectionOne.alt
  const publication = data.aboutPage._rawPublication.body
  const pubImage = data.aboutPage.publication.image.asset
  const pubAlt = data.aboutPage.publication.alt

  return (
    <Layout title={title} description={metaDescription}>
      <Hero
        fluid={heroImage}
        styles={imageHotspot(heroHotspot)}
        size="fullheight-with-navbar"
      >
        <div className="card-about">
          <div className="card-content">
            <div className="content">
              <PortableText
                blocks={heroCard}
                serializers={{ types: { block: CardRenderer } }}
              />
            </div>
          </div>
        </div>
      </Hero>
      <section className="section-storytelling">
        <div className="container">
          <div className="copy">
            <div className="content">
              <PortableText
                blocks={sectionOne}
                serializers={{ types: { block: SectionRenderer } }}
              />
            </div>
          </div>
          <SanityImage
            image={sectionOneImg}
            options={{ maxWidth: 1440 }}
            alt={sectionOneAlt}
            className="type-writer"
          />
        </div>
      </section>
      <Brands />
      <Box as="section" className="section-publication">
        <Box className="container">
          <Box className="card-publication">
            <Box className="card-content">
              <Box className="content">
                <PortableText
                  blocks={publication}
                  serializers={{
                    types: {
                      block: SectionRenderer,
                      blockImage: BlockImageRenderer,
                    },
                  }}
                />
                <Box mt="2rem">
                  <Link
                    as={GatsbyLink}
                    role="button"
                    to="/stories"
                    color="white"
                    className="button is-solid is-montserrat is-uppercase"
                  >
                    stories &rang;
                  </Link>
                </Box>
              </Box>
              <SanityImage
                options={{ maxWidth: 1200 }}
                image={pubImage}
                alt={pubAlt}
                className="image"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
