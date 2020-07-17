import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import BlogTabs from "../components/BlogTabs"
import toPlainText from "../hooks/toPlainText"
import Pagination from "../components/Pagination"
import imageHotspot from "../hooks/imageHotspot"

const Category = ({ data, pageContext }) => {
  const { blog, category, posts } = data

  return (
    <Layout title={pageContext.title}>
      <Hero
        fluid={
          category.heroImage && category.heroImage.asset
            ? category.heroImage.asset.fluid
            : blog.heroImage.asset.fluid
        }
        style={imageHotspot(
          category.heroImage
            ? category.heroImage.hotspot
            : blog.heroImage.hotspot
        )}
      />
      <BlogTabs />
      <section className="section">
        <div className="container">
          {category.title ? (
            <>
              <h1 className="title is-montserrat has-text-black is-uppercase">
                {category.title}
              </h1>
              <hr />
            </>
          ) : null}
          <div className="wrapper-post">
            {posts.edges.map(({ node: post }) => {
              const { id, title, mainImage, _rawBody, category, slug } = post
              const image = mainImage.asset.fluid
              const link = `/stories/${category.slug.current}/${slug.current}`
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
  query($slug: String!, $skip: Int!, $limit: Int!) {
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
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      title
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
    posts: allSanityPost(
      filter: { category: { slug: { current: { eq: $slug } } } }
      skip: $skip
      limit: $limit
    ) {
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
export default Category
