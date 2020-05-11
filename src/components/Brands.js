import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Brands = () => {
  const data = useStaticQuery(graphql`
    query {
      brands: allSanityBrands(sort: { fields: brandName }) {
        edges {
          node {
            id
            alt
            brandName
            brandUrl
            logo {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="section-brands">
      <div
        className="container"
        style={{
          maxWidth: "70ch",
        }}
      >
        <h1 className="title is-montserrat is-uppercase has-text-black has-text-centered is-size-4-mobile">
          clients + partners
        </h1>
        <div className="logos">
          {data.brands.edges.map(({ node: brand }) => (
            <a
              key={brand.id}
              className="logo"
              href={brand.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fluid={brand.logo.asset.fluid} alt={brand.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
