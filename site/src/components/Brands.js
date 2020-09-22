import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

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
                fixed(width: 175) {
                  ...GatsbySanityImageFixed
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
      <div className="container">
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
              <Img
                fixed={brand.logo.asset.fixed}
                alt={brand.alt}
                objectFit="contain"
                objectPosition="center"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
