import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "@chakra-ui/react"

const Brands = () => {
  const data = useStaticQuery(graphql`
    {
      sanityAboutPage {
        brands {
          alt
          brandName
          brandUrl
          id
          logo {
            asset {
              fixed(width: 250) {
                ...GatsbySanityImageFixed
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
          {data.sanityAboutPage.brands.map(brand => (
            <Link
              key={brand.id}
              href={brand.brandUrl}
              isExternal
              display="flex"
              flex={1}
              justifyContent="center"
              alignItems="center"
            >
              <Img
                fixed={brand.logo.asset.fixed}
                alt={brand.alt}
                objectFit="contain"
                objectPosition="center"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
