import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, Link } from "@chakra-ui/react"
import SanityImage from "./SanityImage"

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
              _id
              url
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
          {data.sanityAboutPage.brands.map((brand) => {
            const { id, brandUrl, logo, alt } = brand
            return (
              <Link
                key={id}
                href={brandUrl}
                isExternal
                display="flex"
                flex={1}
                justifyContent="center"
                alignItems="center"
              >
                <SanityImage
                  image={logo.asset}
                  alt={alt || ""}
                  options={{ maxWidth: 250 }}
                  objectFit="contain"
                  objectPosition="center"
                />
              </Link>
            )
          })}
        </Grid>
      </div>
    </section>
  )
}

export default Brands
