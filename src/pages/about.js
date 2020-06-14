import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"

import Layout from "../components/Layout"
import Brands from "../components/Brands"
import InstagramFeed from "../components/InstagramFeed"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      aboutPage: sanityAboutPage {
        _rawMetaDescription
        title
        _rawHeroCard
        heroImage {
          asset {
            fluid(maxWidth: 1440) {
              ...GatsbySanityImageFluid
            }
          }
        }
        _rawSectionOne
        _rawPublication
        sectionOne {
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
        }
        publication {
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
        }
      }
    }
  `)
  const CardRenderer = props => {
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

  const SectionRenderer = props => {
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
  const BlockImageRenderer = props => {
    const urlFor = source =>
      imageUrlBuilder({
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      }).image(source)
    return (
      <a
        role="button"
        href="https://medium.com/lastdraft"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={urlFor(props.node.image.asset).maxWidth(400)}
          alt={props.node.alt}
        />
      </a>
    )
  }

  const title = data.aboutPage.title
  const metaDescription = data.aboutPage._rawMetaDescription[0].children[0].text
  const heroImage = data.aboutPage.heroImage.asset.fluid
  const heroCard = data.aboutPage._rawHeroCard
  const sectionOne = data.aboutPage._rawSectionOne.body
  const sectionOneImg = data.aboutPage.sectionOne.image.asset.fluid
  const sectionOneAlt = data.aboutPage.sectionOne.alt
  const publication = data.aboutPage._rawPublication.body
  const pubImage = data.aboutPage.publication.image.asset.fluid
  const pubAlt = data.aboutPage.publication.alt

  return (
    <Layout title={title} description={metaDescription}>
      <BackgroundImage
        fluid={heroImage}
        className="hero-about is-fullheight-with-navbar"
      >
        <div className="hero-body">
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
        </div>
      </BackgroundImage>
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
          <Img
            className="type-writer"
            fluid={sectionOneImg}
            alt={sectionOneAlt}
          />
        </div>
      </section>
      <Brands />
      <section className="section-publication">
        <div className="container">
          <div className="card-publication">
            <div className="card-content">
              <div className="content">
                <PortableText
                  blocks={publication}
                  serializers={{
                    types: {
                      block: SectionRenderer,
                      blockImage: BlockImageRenderer,
                    },
                  }}
                />
                <a
                  role="button"
                  href="https://medium.com/lastdraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-solid is-montserrat is-uppercase"
                >
                  &nbsp; stories &rang;
                </a>
              </div>
              <Img className="image" fluid={pubImage} alt={pubAlt} />
            </div>
          </div>
        </div>
      </section>
      <InstagramFeed />
    </Layout>
  )
}
