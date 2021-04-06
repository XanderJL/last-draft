import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import toPlainText from "../hooks/toPlainText"
import AuthorBio from "../components/AuthorBio"
import Pagination from "../components/Pagination"
import SanityImage from "../components/SanityImage"

const Author = ({ data, pageContext }) => {
  const { author, posts } = data
  return (
    <Layout title={pageContext.title}>
      <div className="container" style={{ maxWidth: "70ch" }}>
        <section className="section">
          <AuthorBio author={author} />
        </section>
        <section className="section author-posts">
          <h3 className="title is-montserrat is-uppercase is-size-5-mobile">
            Latest Stories
          </h3>
          {posts.edges.map(({ node: post }) => {
            const {
              id,
              author,
              _createdAt,
              mainImage,
              title,
              _rawBody,
              category,
              slug,
            } = post
            const authorLink = `/stories/authors/${author.slug.current}`
            const categoryLink = `/stories/${category.slug.current}`
            const postLink = categoryLink + `/${slug.current}`

            return (
              <div key={id} className="card">
                <div className="card-header">
                  <div className="card-header-icon">
                    <Link to={authorLink} className="">
                      {author.image ? (
                        <SanityImage
                          className="avatar"
                          image={author.image.asset}
                          options={{ width: 50, height: 50 }}
                          imgStyle={{ width: "100%", height: "auto" }}
                        />
                      ) : null}
                    </Link>
                  </div>
                  <div className="card-header-title">
                    <h3 className="is-montserrat is-size-5">
                      <Link to={authorLink}>{author.name}</Link> in{" "}
                      <Link to={categoryLink}>{category.title} </Link>{" "}
                    </h3>
                    <h3 className="is-montserrat has-text-grey">
                      {_createdAt}
                    </h3>
                  </div>
                </div>
                <div className="card-image">
                  <Link to={postLink}>
                    <SanityImage
                      className="image"
                      image={mainImage.asset}
                      options={{ maxWidth: 1600, maxHeight: 900 }}
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h2 className="title is-montserrat is-uppercase is-size-4-mobile">
                      {title}
                    </h2>
                    <p>{toPlainText(_rawBody).slice(0, 119) + "..."}</p>
                  </div>
                  <Link to={postLink} className="button is-montserrat">
                    Read &rsaquo;
                  </Link>
                </div>
              </div>
            )
          })}
          <Pagination pageContext={pageContext} />
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    author: sanityAuthor(slug: { current: { eq: $slug } }) {
      name
      _rawBio
      slug {
        current
      }
      image {
        asset {
          _id
          url
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
          slug {
            current
          }
          mainImage {
            asset {
              _id
              url
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
            image {
              asset {
                _id
                url
              }
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
