import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"

const TheLastDraft = ({ data }) => {
  const { categories } = data
  return (
    <Layout title="The Last Draft">
      <Hero />
      {categories.edges.map(({ node: category }) => (
        <section key={category.id} className="section">
          <div className="container">
            <Link to={"/the-last-draft/" + category.slug.current}>
              <h2 className="title is-size-2-desktop is-montserrat is-uppercase has-text-black">
                {category.title} &rsaquo;
              </h2>
            </Link>
          </div>
        </section>
      ))}
    </Layout>
  )
}

export const data = graphql`
  {
    categories: allSanityCategory(sort: { fields: title }) {
      edges {
        node {
          id
          slug {
            current
          }
          title
        }
      }
    }
  }
`

export default TheLastDraft
