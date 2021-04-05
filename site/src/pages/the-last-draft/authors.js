import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import AuthorBio from "../../components/AuthorBio"

const Authors = ({ data }) => {
  return (
    <Layout title="Authors">
      <div className="container authors-section" style={{ maxWidth: "70ch" }}>
        {data.authors.edges.map(({ node: author }) => {
          return (
            <section className="section">
              <AuthorBio author={author} />
            </section>
          )
        })}
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    authors: allSanityAuthor {
      edges {
        node {
          id
          slug {
            current
          }
          name
          _rawBio
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

export default Authors
