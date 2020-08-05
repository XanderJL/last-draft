import React from "react"
import { graphql, Link } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Serializers from "../components/serializers/Serializers"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import AuthorBio from "../components/AuthorBio"
import Tags from "../components/Tags"
import toPlainText from "../hooks/toPlainText"

const post = ({ data }) => {
  const {
    title,
    author,
    publishedAt,
    tags,
    mainImage,
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
      <Hero fluid={mainImage.asset.fluid} styles={positionStyles} />
      <div className="blog-post" style={{ maxWidth: "75ch", margin: "0 auto" }}>
        <section className="section">
          <div className="container has-text-centered">
            <h1
              className="title is-montserrat is-uppercase is-size-2-desktop has-text-black"
              style={{ marginBottom: "0.75rem" }}
            >
              {title}
            </h1>
            <Link
              to={"/stories/authors/" + author.slug.current}
              className="is-montserrat is-uppercase"
            >
              {author.name}
            </Link>
            <p className="is-montserrat" style={{ marginBottom: "2.5rem" }}>
              {publishedAt}
            </p>
          </div>

          <div className="container content is-montserrat">
            <PortableText blocks={_rawBody} serializers={Serializers} />
            <PortableText blocks={_rawPostFooter} serializers={Serializers} />
          </div>
        </section>
        {tags.length ? (
          <section className="section">
            <div className="container">
              <Tags tags={tags} />
            </div>
          </section>
        ) : null}
        <hr className="solid-hr" />
        <section className="section">
          <div className="container">
            <AuthorBio author={author} />
          </div>
        </section>
      </div>
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
          asset {
            fixed(width: 150, height: 150) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
      tags
      title
      publishedAt(formatString: "MMMM Do, YYYY")
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
        hotspot {
          width
          height
          x
          y
        }
      }
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
