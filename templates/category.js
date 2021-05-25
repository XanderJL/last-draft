import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero-old"
import PostCard from "../components/PostCard"
import BlogTabs from "../components/BlogTabs"
import toPlainText from "../hooks/toPlainText"
import Pagination from "../components/Pagination"
import imageHotspot from "../hooks/imageHotspot"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

const Category = ({ data, pageContext }) => {
  const { blog, category, posts } = data

  const heroImageData = (image) =>
    getGatsbyImageData(image, { maxWidth: 1920 }, sanityConfig)

  return (
    <Layout title={pageContext.title}>
      <Hero
        image={
          category.heroImage && category.heroImage.asset
            ? heroImageData(category.heroImage.asset)
            : heroImageData(blog.heroImage.asset)
        }
        style={imageHotspot(
          category.heroImage
            ? category.heroImage.hotspot
            : blog.heroImage.hotspot
        )}
      />
      <div className="container" style={{ maxWidth: "1216px" }}>
        <BlogTabs />
        <section className="section">
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
              const {
                id,
                title,
                mainImage,
                _rawBody,
                previewCopy,
                category,
                slug,
              } = post
              const image = mainImage.asset
              const link = `/stories/${category.slug.current}/${slug.current}`
              return (
                <PostCard
                  key={id}
                  title={title}
                  image={image}
                  link={link}
                  cardStyle={{ maxWidth: "420px" }}
                >
                  <p>
                    {previewCopy
                      ? previewCopy
                      : toPlainText(_rawBody).slice(0, 159) + "..."}
                  </p>
                </PostCard>
              )
            })}
          </div>
          <Pagination pageContext={pageContext} />
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    blog: sanityBlog {
      heroImage {
        asset {
          _id
          url
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
          _id
          url
        }
        hotspot {
          x
          y
        }
      }
    }
    posts: allSanityPost(
      filter: { category: { slug: { current: { eq: $slug } } } }
      sort: { fields: publishedAt, order: DESC }
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
          previewCopy
          _rawBody
          mainImage {
            asset {
              _id
              url
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
