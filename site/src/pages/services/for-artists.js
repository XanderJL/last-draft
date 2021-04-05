import * as React from "react"
import { graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../../components/Layout"
import Serializers, {
  CardRenderer,
  BlockRenderer,
  BlockImageRenderer,
} from "../../components/Serializers"
import OptInModal from "../../components/Modals/OptInModal"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../../lib/sanityConfig"
import { StaticImage } from "gatsby-plugin-image"
import SanityImage from "../../components/SanityImage"

const ForArtists = ({ data }) => {
  const { page } = data
  const heroImage = getGatsbyImageData(
    page.heroImage.asset,
    { maxWidth: 1920 },
    sanityConfig
  )

  return (
    <Layout title={page.title}>
      {heroImage ? (
        <BgImage
          className="hero is-fullheight-with-navbar is-primary"
          image={heroImage}
        >
          <div className="hero-body">
            <div className="container">
              <div className="card-hero">
                <div className="card-body">
                  <PortableText
                    className="content"
                    blocks={page.heroCardRaw}
                    serializers={{
                      types: { block: CardRenderer },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </BgImage>
      ) : (
        <div className="hero is-fullheight-with-navbar is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="card-hero">
                <div className="card-body">
                  <div className="content">
                    <PortableText
                      blocks={page.heroCardRaw}
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
          {page.services.map((service) => (
            <div key={service.id} className="service-card">
              {service.image ? (
                <SanityImage
                  image={service.image.asset}
                  options={{ maxWidth: 800 }}
                  alt={
                    service.imageAlt
                      ? service.imageAlt
                      : "The author hasn't defined the image yet."
                  }
                  className="card-image"
                />
              ) : (
                <StaticImage
                  src="../../images/kegs.jpg"
                  width={800}
                  alt="Beer kegs"
                  className="card-image"
                />
              )}
              <div className="content card-copy">
                <PortableText
                  blocks={service.bodyRaw}
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
      <OptInModal />
    </Layout>
  )
}

export const data = graphql`
  query {
    page: sanityServicesPage(
      id: { eq: "9c0b5a47-c57c-53e2-bafa-38e8069feb58" }
    ) {
      title
      heroImage {
        asset {
          url
        }
      }
      heroCardRaw
      services {
        id
        image {
          asset {
            url
          }
        }
        imageAlt
        bodyRaw
      }
    }
  }
`
export default ForArtists
