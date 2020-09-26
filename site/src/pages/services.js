/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Grid, Heading, Text, List, ListItem } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"
import imageUrlBuilder from "@sanity/image-url"
import Layout from "../components/Layout"
import PortableText from "@sanity/block-content-to-react"

const ServicesPage = ({ data }) => {
  const { services, placeholder, _rawHeroCard } = data
  const heroImage = services.heroImage.asset.fluid

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
        <BackgroundImage
          className="hero is-fullheight-with-navbar is-primary"
          fluid={heroImage}
        >
          <div className="hero-body">
            <div className="container">
              <div className="card-hero">
                <div className="card-body">
                  <PortableText
                    className="content"
                    blocks={services._rawHeroCard}
                    serializers={{ types: { block: CardRenderer } }}
                  />
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
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
      <section
        css={css`
          padding: 5rem 1.25rem 10rem 1.25rem;
        `}
        className="section has-background-white-bis"
      >
        <div className="container" style={{ maxWidth: "1100px" }}>
          <Grid
            gridTemplateColumns={[
              "minmax(0, 1fr)",
              "minmax(0, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap="32px"
          >
            {services.offeredServices.map((service, i) => {
              const { title, description, bulletPoints, slug } = service
              return (
                <Box
                  key={i}
                  d="flex"
                  flexDir="column"
                  justifyContent="space-between"
                  p={[
                    "3rem 1.25rem",
                    "3rem 1.25rem",
                    "3rem 1.25rem",
                    "3.5rem 3rem 5rem 3rem",
                  ]}
                  className="card"
                >
                  <Box>
                    <Heading
                      as="h2"
                      color="black"
                      mb=".5em"
                      fontSize={["2xl", "3xl", "4xl"]}
                      className="is-montserrat is-uppercase"
                    >
                      {title}
                    </Heading>
                    <Text m="1.5rem 0">{description}</Text>
                    <List styleType="disc">
                      {bulletPoints.map((point, i) => (
                        <ListItem key={i}>{point}</ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box mt="1.5rem">
                    <Link to={`/services/${slug.current}`}>
                      <Box as="button" className="button">
                        Read More
                      </Box>
                    </Link>
                  </Box>
                </Box>
              )
            })}
          </Grid>
        </div>
      </section>
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
      }
      _rawHeroCard
      offeredServices {
        title
        slug {
          current
        }
        description
        bulletPoints
      }
    }
  }
`
export default ServicesPage
