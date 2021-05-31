import * as React from "react"
import { Container, Grid, Heading, Image } from "@chakra-ui/react"
import Link from "./Link"

const Brands = ({ brands, ...rest }) => {
  return (
    <Container maxW="container.lg" {...rest}>
      <Heading textTransform="uppercase" textAlign="center" pb="1rem">
        clients + partners
      </Heading>
      <Grid
        templateColumns={{
          base: "minmax(0, 1fr)",
          md: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
        gap={2}
      >
        {brands.map((brand) => {
          const { _id, brandUrl, logo, alt } = brand
          return (
            <Link
              key={_id}
              href={brandUrl}
              isExternal
              display="flex"
              flex={1}
              justifyContent="center"
              alignItems="center"
              maxW={250}
              alignSelf="center"
              justifySelf="center"
            >
              <Image
                src={logo?.url}
                fallbackSrc={logo?.metadata?.lqip}
                alt={alt || ""}
                options={{ maxWidth: 400 }}
                objectFit="contain"
                objectPosition="center"
              />
            </Link>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Brands
