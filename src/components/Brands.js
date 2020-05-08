import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Brands = () => {
  const data = useStaticQuery(graphql`
    query {
      brands: allSanityBrands {
        edges {
          node {
            id
            alt
            brandName
            brandUrl
            logo {
              asset {
                fluid {
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
    <section className="section">
      <div className="container">
        <h1 className="title is-montserrat is-uppercase has-text-black">
          brands we work with
        </h1>
        <div className="grid-wrapper">
          {data.brands.edges.map(({ node: brand }) => (
            <a
              key={brand.id}
              href={brand.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                alignSelf: "center",
              }}
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
