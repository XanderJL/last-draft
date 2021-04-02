import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import imageUrlBuilder from "@sanity/image-url"
import Layout from "../../components/Layout"
import PortableText from "@sanity/block-content-to-react"

const ForBusiness = ({ data }) => {
  const { page, placeholder } = data
  const heroImage = page.heroImage.asset.fluid
  const placeholderImg = placeholder.childImageSharp.fluid

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

  const BlockRenderer = (props) => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase is-size-4 is-size-5-mobile`,
        },
        props.children
      )
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
      <img
        src={urlFor(props.node.image.asset).maxWidth(400)}
        alt={props.node.alt}
      />
    )
  }

  return (
    <Layout title={page.title}>
      {heroImage ? (
        <BackgroundImage
          className="hero is-fullheight-with-navbar is-primary"
          fluid={heroImage}
        >
          <div className="hero-body">
            <div className="container">
              <div className="card-hero">
                <div className="card-body">
                  <PortableText
                    className="content"
                    blocks={page._rawHeroCard}
                    serializers={{ types: { block: CardRenderer } }}
                  />
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      ) : (
        <div className="hero is-fullheight-with-navbar is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="card-hero">
                <div className="card-body">
                  <div className="content">
                    <PortableText
                      blocks={page._rawHeroCard}
                      serializers={{ types: { block: CardRenderer } }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="section has-background-white-bis">
        <div className="container" style={{ maxWidth: "1100px" }}>
          {page.services.map((service) => {
            const { id, image, imageAlt, slug, _rawBody } = service
            return (
              <div id={slug.current} key={id} className="service-card">
                {image ? (
                  <Img
                    fluid={image.asset.fluid}
                    alt={
                      imageAlt
                        ? imageAlt
                        : "The author hasn't defined the image yet."
                    }
                    className="card-image"
                  />
                ) : (
                  <Img
                    fluid={placeholderImg}
                    alt="Beer kegs"
                    className="card-image"
                  />
                )}
                <div className="content card-copy">
                  <PortableText
                    blocks={_rawBody}
                    serializers={{
                      types: {
                        block: BlockRenderer,
                        blockImage: BlockImageRenderer,
                      },
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query {
    placeholder: file(relativePath: { eq: "kegs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    page: sanityServicesPage(
      id: { eq: "-3fd30ba7-a37f-5aa7-9743-c066a9ed57a0" }
    ) {
      title
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...SanityImageAsset
          }
        }
      }
      _rawHeroCard
      services {
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 800) {
              ...SanityImageAsset
            }
          }
        }
        imageAlt
        _rawBody
      }
    }
  }
`
export default ForBusiness
