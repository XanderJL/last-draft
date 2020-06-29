import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/Layout"
import toPlainText from "../hooks/toPlainText"

const Author = ({ data, pathContext }) => {
  const { author, posts } = data
  return (
    <Layout title={pathContext.title}>
      <section className="section">
        <div className="container">
          <div className="media">
            <div className="media-left">
              <Img className="avatar" fixed={author.image.asset.fixed} />
            </div>
            <div className="media-content">
              <div className="content">
                <h1 className="title is-montserrat is-uppercase is-size-2-desktop">
                  {author.name}
                </h1>
                <PortableText blocks={author._rawBio} />
              </div>
            </div>
          </div>
          <hr className="solid-hr" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          {posts.edges.map(({ node: post }) => {
            const { id, author, mainImage, title, _rawBody, category } = post
            return (
              <div key={id} className="blog-post">
                <div className="header">
                  <h3 className="is-montserrat">
                    <Link to={`/the-last-draft/authors/${author.slug.current}`}>
                      {author.name}
                    </Link>{" "}
                    in{" "}
                    <Link to={`/the-last-draft/${category.slug.current}`}>
                      {category.title}
                    </Link>
                  </h3>
                </div>
                <Img className="image" fluid={mainImage.asset.fluid} />
                <div className="content">
                  <h2 className="title is-montserrat is-uppercase">{title}</h2>
                  <p>{toPlainText(_rawBody).slice(0, 59) + "..."}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    author: sanityAuthor(slug: { current: { eq: $slug } }) {
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
    posts: allSanityPost(
      filter: { author: { slug: { current: { eq: $slug } } } }
    ) {
      edges {
        node {
          id
          _createdAt(formatString: "MMMM Do, YYYY")
          title
          _rawBody
          mainImage {
            asset {
              fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
          }
          author {
            name
            slug {
              current
            }
          }
          category {
            title
            slug {
              current
            }
          }
        }
      }
    }
  }
`
export default Author
