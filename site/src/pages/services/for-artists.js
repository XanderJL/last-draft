import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../../components/Layout"
import Serializers, {
  CardRenderer,
  BlockRenderer,
  BlockImageRenderer,
} from "../../components/Serializers"
import ConvertKitModal from "../../components/ConvertKitModal"

const ForArtists = ({ data }) => {
  const { page, placeholder } = data
  const heroImage = page.heroImage.asset.fluid
  const placeholderImg = placeholder.childImageSharp.fluid
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
                    serializers={{
                      types: { block: CardRenderer },
                    }}
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
                      serializers={{
                        types: { block: CardRenderer },
                      }}
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
          {page.services.map(service => (
            <div key={service.id} className="service-card">
              {service.image ? (
                <Img
                  fluid={service.image.asset.fluid}
                  alt={
                    service.imageAlt
                      ? service.imageAlt
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
                  blocks={service._rawBody}
                  serializers={{
                    types: {
                      hr: Serializers.types.hr,
                      block: BlockRenderer,
                      blockImage: BlockImageRenderer,
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <ConvertKitModal />
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
      id: { eq: "9c0b5a47-c57c-53e2-bafa-38e8069feb58" }
    ) {
      title
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawHeroCard
      services {
        id
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageAlt
        _rawBody
      }
    }
  }
`
export default ForArtists
