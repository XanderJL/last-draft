import * as React from "react"
import { graphql, Link } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Serializers from "../components/Serializers"
import { Box, Text, Heading } from "@chakra-ui/react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import AuthorBio from "../components/AuthorBio"
import Tags from "../components/Tags"
import toPlainText from "../hooks/toPlainText"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

const post = ({ data }) => {
  const {
    title,
    author,
    publishedAt,
    tags,
    mainImage,
    mainCaption,
    socialImage,
    _rawBody,
  } = data.sanityPost

  const { _rawPostFooter } = data.sanityBlog

  const positionStyles = mainImage.hotspot
    ? {
        backgroundPositionX: `${mainImage.hotspot.x * 100}%`,
        backgroundPositionY: `${mainImage.hotspot.y * 100}%`,
      }
    : null

  const image = socialImage ? socialImage.asset.fixed : null

  return (
    <Layout
      title={title}
      description={toPlainText(_rawBody).slice(0, 156) + "..."}
      image={image}
    >
      <Hero
        fluid={getGatsbyImageData(
          mainImage.asset,
          { maxWidth: 1920 },
          sanityConfig
        )}
        styles={positionStyles}
        size="large"
      />
      <Box className="blog-post" style={{ maxWidth: "75ch", margin: "0 auto" }}>
        {mainCaption && (
          <Box
            p="1.25rem"
            fontSize="xl"
            className="content has-text-grey is-italic"
          >
            <Text className="is-montserrat">{mainCaption}</Text>
          </Box>
        )}
        <Box as="section" className="section">
          <Box className="container has-text-centered">
            <Heading
              as="h1"
              fontWeight={400}
              className="title is-montserrat is-uppercase is-size-2-desktop has-text-black"
              style={{ marginBottom: "0.75rem" }}
            >
              {title}
            </Heading>
            <Link
              to={"/stories/authors/" + author.slug.current}
              className="is-montserrat is-uppercase"
            >
              {author.name}
            </Link>
            <Text mb="2.5rem" className="is-montserrat">
              {publishedAt}
            </Text>
          </Box>
          <Box className="container content is-montserrat">
            <PortableText blocks={_rawBody} serializers={Serializers} />
          </Box>
        </Box>
        <hr className="solid-hr" />
        <Box as="section" className="section">
          <Box className="container content is-montserrat">
            <AuthorBio author={author} />
            <PortableText blocks={_rawPostFooter} serializers={Serializers} />
          </Box>
          {tags.length ? (
            <Box className="container">
              <Tags tags={tags} />
            </Box>
          ) : null}
        </Box>
      </Box>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    sanityBlog {
      _rawPostFooter
    }
    sanityPost(slug: { current: { eq: $slug } }) {
      author {
        slug {
          current
        }
        name
        _rawBio
        image {
          asset
        }
      }
      tags
      title
      publishedAt(formatString: "MMMM Do, YYYY")
      mainImage {
        asset
        hotspot {
          width
          height
          x
          y
        }
      }
      mainAlt
      mainCaption
      socialImage: mainImage {
        asset {
          fixed(width: 1200) {
            src
            width
            height
          }
        }
      }
      _rawBody
    }
  }
`

export default post
