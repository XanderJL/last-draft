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
        <h1
          className="title is-montserrat is-uppercase has-text-black has-text-centered is-size-2-tablet"
          style={{ marginBottom: "3.25rem" }}
        >
          brands we work with
        </h1>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {data.brands.edges.map(({ node: brand }) => (
            <a
              key={brand.id}
              href={brand.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "1rem",
                minWidth: "250px",
                maxWidth: "400px",
                minHeight: "auto",
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
