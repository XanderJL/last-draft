import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Hero from "../../components/Hero"
import PostCard from "../../components/PostCard"
import BlogTabs from "../../components/BlogTabs"
import Pagination from "../../components/Pagination"
import toPlainText from "../../hooks/toPlainText"
import imageHotspot from "../../hooks/imageHotspot"

const recent = ({ data, pageContext }) => {
  const { blog, posts } = data

  return (
    <Layout title="Recent Stories">
      <Hero
        fluid={blog.heroImage.asset.fluid}
        style={imageHotspot(blog.heroImage.hotspot)}
      />
      <BlogTabs />
      <section className="section">
        <div className="container">
          <h1 className="title is-montserrat has-text-black is-uppercase">
            recent stories
          </h1>
          <hr />
          <div className="wrapper-post">
            {posts.edges.map(({ node: post }) => {
              const { id, title, mainImage, _rawBody, category, slug } = post
              const image = mainImage.asset.fluid
              const link = `/the-last-draft/${category.slug.current}/${slug.current}`
              return (
                <PostCard
                  key={id}
                  title={title}
                  image={image}
                  link={link}
                  cardStyle={{ maxWidth: "420px" }}
                >
                  <p>{toPlainText(_rawBody).slice(0, 159) + "..."}</p>
                </PostCard>
              )
            })}
          </div>
          <Pagination pageContext={pageContext} />
        </div>
      </section>
    </Layout>
  )
}

export const data = graphql`
  {
    blog: sanityBlog {
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
        hotspot {
          x
          y
        }
      }
    }
    posts: allSanityPost(limit: 10, sort: { fields: _createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          category {
            slug {
              current
            }
            title
          }
          _rawBody
          mainImage {
            asset {
              fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          slug {
            current
          }
          tags
        }
      }
    }
  }
`
export default recent
