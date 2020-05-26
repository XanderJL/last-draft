import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/Layout"
import PortableText from "@sanity/block-content-to-react"

const ServicesPage = ({ data }) => {
  const BlockRenderer = props => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      return React.createElement(
        style,
        { className: `title is-montserrat is-uppercase` },
        props.children
      )
    }

    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }

  return (
    <Layout title="Services">
      <section className="section has-background-white-bis">
        <div className="container">
          {data.services.edges.map(({ node: service }) => (
            <div key={service.id} className="service-card">
              {service.image ? (
                <Img
                  sizes={{ ...service.image.asset.fluid, aspectRatio: 1 / 1 }}
                  className="card-image"
                />
              ) : (
                <Img
                  fixed={data.placeholder.childImageSharp.fixed}
                  className="card-image"
                />
              )}
              <div className="service-card-body">
                <div className="content card-copy">
                  <PortableText
                    blocks={service._rawBody}
                    serializers={{ types: { block: BlockRenderer } }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query {
    placeholder: file(relativePath: { eq: "about/beers-1.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    services: allSanityService {
      edges {
        node {
          id
          _rawBody
        }
      }
    }
  }
`
export default ServicesPage
