import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import toPlainText from "../hooks/toPlainText"
import Pagination from "../components/Pagination"

const Category = ({ data, pageContext }) => {
  return (
    <Layout title={pageContext.title}>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="wrapper-post">
            {data.posts.edges.map(({ node: post }) => {
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
  query($slug: String!, $skip: Int!, $limit: Int!) {
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
