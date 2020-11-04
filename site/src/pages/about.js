/** @jsx jsx */
import React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { Box, Link, Grid, Heading } from "@chakra-ui/core"
import { css, jsx } from "@emotion/core"
import Img from "gatsby-image/withIEPolyfill"
import PortableText from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import Layout from "../components/Layout"
import Brands from "../components/Brands"
import SubmitForm from "../components/SubmitForm"
import Hero from "../components/Hero"
import imageHotspot from "../hooks/imageHotspot"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      aboutPage: sanityAboutPage {
        _rawMetaDescription
        title
        _rawHeroCard
        heroImage {
          asset {
            fluid(maxWidth: 1440) {
              ...GatsbySanityImageFluid
            }
          }
          hotspot {
            x
            y
          }
        }
        _rawSectionOne
        _rawPublication
        sectionOne {
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
        }
        publication {
          image {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
          alt
        }
        grid {
          title
          url
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          alt
        }
      }
    }
  `)

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

  const SectionRenderer = props => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black is-size-4-mobile`,
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
  const BlockImageRenderer = props => {
    const urlFor = source =>
      imageUrlBuilder({
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      }).image(source)
    return (
      <Link
        as={GatsbyLink}
        role="button"
        to="/stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={urlFor(props.node.image.asset).maxWidth(400)}
          alt={props.node.alt}
        />
      </Link>
    )
  }

  const title = data.aboutPage.title
  const metaDescription = data.aboutPage._rawMetaDescription[0].children[0].text
  const heroImage = data.aboutPage.heroImage.asset.fluid
  const heroHotspot = data.aboutPage.heroImage.hotspot
  const heroCard = data.aboutPage._rawHeroCard
  const sectionOne = data.aboutPage._rawSectionOne.body
  const sectionOneImg = data.aboutPage.sectionOne.image.asset.fluid
  const sectionOneAlt = data.aboutPage.sectionOne.alt
  const publication = data.aboutPage._rawPublication.body
  const pubImage = data.aboutPage.publication.image.asset.fluid
  const pubAlt = data.aboutPage.publication.alt
  const instaGrid = data.aboutPage.grid

  return (
    <Layout title={title} description={metaDescription}>
      <Hero
        fluid={heroImage}
        styles={imageHotspot(heroHotspot)}
        size="fullheight-with-navbar"
      >
        <div className="card-about">
          <div className="card-content">
            <div className="content">
              <PortableText
                blocks={heroCard}
                serializers={{ types: { block: CardRenderer } }}
              />
            </div>
          </div>
        </div>
      </Hero>
      <section className="section-storytelling">
        <div className="container">
          <div className="copy">
            <div className="content">
              <PortableText
                blocks={sectionOne}
                serializers={{ types: { block: SectionRenderer } }}
              />
            </div>
          </div>
          <Img
            className="type-writer"
            fluid={sectionOneImg}
            alt={sectionOneAlt}
          />
        </div>
      </section>
      <Brands />
      <Box as="section" className="section-publication">
        <Box className="container">
          <Box className="card-publication">
            <Box className="card-content">
              <Box className="content">
                <PortableText
                  blocks={publication}
                  serializers={{
                    types: {
                      block: SectionRenderer,
                      blockImage: BlockImageRenderer,
                    },
                  }}
                />
                <Box mt="2rem">
                  <Link
                    as={GatsbyLink}
                    role="button"
                    to="/stories"
                    color="white"
                    className="button is-solid is-montserrat is-uppercase"
                  >
                    stories &rang;
                  </Link>
                </Box>
              </Box>
              <Img className="image" fluid={pubImage} alt={pubAlt} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box as="section" className="section">
        <SubmitForm />
      </Box>
      <Box as="section" className="section">
        <Box maxW="750px" m="0 auto">
          <Link href="https://www.instagram.com/lastdraftinc" isExternal>
            <Heading
              as="h2"
              mb="1rem"
              fontWeight={400}
              letterSpacing="0.12em"
              color="black"
              _hover={{ color: "cyan.300" }}
            >
              @THELASTDRAFT
            </Heading>
          </Link>
          <Grid
            gridTemplateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(3, minmax(120px, 1fr))",
            }}
            gridAutoRows="1fr"
            gap="1rem"
          >
            {instaGrid.map((post, i) => {
              const { url, image, alt } = post
              return (
                <Link key={i} href={url} bg="white" isExternal>
                  <Img
                    css={css`
                      width: 100%;
                      height: 100%;
                      &:hover {
                        opacity: 0.75;
                      }
                    `}
                    fluid={image.asset.fluid}
                    alt={alt}
                    className="card"
                  />
                </Link>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </Layout>
  )
}
