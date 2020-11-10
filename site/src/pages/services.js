import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Grid, Heading, Text, List, ListItem } from "@chakra-ui/core"
import BackgroundImage from "gatsby-background-image"
import imageUrlBuilder from "@sanity/image-url"
import Layout from "../components/Layout"
import PortableText from "@sanity/block-content-to-react"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"

const ServicesPage = ({ data }) => {
  const { services, placeholder, _rawHeroCard } = data
  const heroImage = services.heroImage.asset.fluid
  const heroHotpsot = services.heroImage.hotspot

  const CardRenderer = props => {
    const { style = "normal" } = props.node

    if (style === "h1") {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black`,
        },
        props.children
      )
    }
    if (style === "h2") {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black`,
        },
        props.children
      )
    }

    if (style === "blockquote") {
      return <blockquote>- {props.children}</blockquote>
    }

    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }

  const BlockRenderer = props => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase is-size-4 is-size-5-mobile`,
        },
        props.children
      )
    }

    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }

  const BlockImageRenderer = props => {
    const urlFor = source =>
      imageUrlBuilder({
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      }).image(source)
    return (
      <img
        src={urlFor(props.node.image.asset).maxWidth(400)}
        alt={props.node.alt}
      />
    )
  }

  return (
    <Layout title={services.title}>
      {heroImage ? (
        <Hero
          fluid={heroImage}
          styles={imageHotspot(heroHotpsot)}
          size="fullheight-with-navbar"
        >
          <div className="card-hero">
            <div className="card-body">
              <PortableText
                className="content"
                blocks={services._rawHeroCard}
                serializers={{ types: { block: CardRenderer } }}
              />
            </div>
          </div>
        </Hero>
      ) : (
        <div className="hero is-fullheight-with-navbar is-primary">
          <div className="hero-body">
            <div className="container">
              <div className="card-hero">
                <div className="card-body">
                  <div className="content">
                    <PortableText
                      blocks={services._rawHeroCard}
                      serializers={{ types: { block: CardRenderer } }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Box
        as="section"
        p="5rem 1.25rem"
        className="section has-background-white-bis"
      >
        <div className="container" style={{ maxWidth: "1100px" }}>
          <Grid
            gridTemplateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(2, 1fr)",
            }}
            gap="32px"
          >
            {services.offeredServices.map((service, i) => {
              const {
                title,
                description,
                bulletPoints,
                slug,
                image,
                alt,
              } = service
              return (
                <Box
                  key={i}
                  d="flex"
                  flexDir="column"
                  justifyContent="space-between"
                  className="card"
                >
                  {image && image.asset ? (
                    <Link to={`/services/${slug.current}`}>
                      <Img fluid={image.asset.fluid} alt={alt && alt} />
                    </Link>
                  ) : null}
                  <Box
                    flex={1}
                    key={i}
                    d="flex"
                    flexDir="column"
                    justifyContent="space-between"
                    p={{ base: "2rem 1.25rem", lg: "2rem 2rem 3rem 2rem" }}
                    className="card"
                  >
                    <Box
                      flex={1}
                      d="flex"
                      flexDir="column"
                      justifyContent="space-between"
                    >
                      <Heading
                        as="h2"
                        color="black"
                        mb=".5em"
                        fontWeight="normal"
                        letterSpacing=".12em"
                        fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                        className="is-montserrat is-uppercase"
                      >
                        {title}
                      </Heading>
                      <Text m="1.5rem 0">{description}</Text>
                      <List stylePosition="inside" styleType="disc">
                        {bulletPoints.map((point, i) => (
                          <ListItem key={i}>{point}</ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box mt="2rem">
                      <Link to={`/services/${slug.current}`}>
                        <Box as="button" className="button">
                          Learn More
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Grid>
        </div>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  query {
    services: sanityServicesLandingPage {
      title
      heroImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
        hotspot {
          x
          y
        }
      }
      _rawHeroCard
      offeredServices {
        title
        slug {
          current
        }
        image {
          hotspot {
            x
            y
          }
          asset {
            fluid(maxWidth: 800, maxHeight: 450) {
              ...GatsbySanityImageFluid
            }
          }
        }
        alt
        description
        bulletPoints
      }
    }
  }
`
export default ServicesPage
