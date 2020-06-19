import React from "react"
import { graphql, Link } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const post = ({ data }) => {
  const {
    title,
    author,
    publishedAt,
    tags,
    mainImage,
    _rawBody,
  } = data.sanityPost

  return (
    <Layout title={title}>
      <Hero fluid={mainImage.asset.fluid} />
      <div className="blog-post" style={{ maxWidth: "75ch", margin: "0 auto" }}>
        <section className="section">
          <div className="container has-text-centered">
            <h1 className="title is-montserrat is-uppercase is-size-2-desktop has-text-black">
              {title}
            </h1>
            <Link
              to={"/the-last-draft/" + author.slug.current}
              className="is-montserrat is-uppercase"
            >
              {author.name}
            </Link>
            <p className="is-montserrat is-uppercase">{publishedAt}</p>
          </div>
        </section>
        <section className="section">
          <div className="container content">
            <PortableText blocks={_rawBody} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      author {
        slug {
          current
        }
        name
        _rawBio
        image {
          asset {
            fixed(width: 150) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
      tags
      title
      publishedAt(formatString: "DD/MM/YYYY")
      mainImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`

export default post
