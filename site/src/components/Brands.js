import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { Grid, Link } from "@chakra-ui/react"

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
        <Grid
          templateColumns={{ base: "minmax(0, 1fr)", md: "repeat(3, 1fr)" }}
          gap="1rem"
        >
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
        </Grid>
      </div>
    </section>
  )
}

export default Brands
