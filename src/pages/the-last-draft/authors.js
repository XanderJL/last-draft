import React from "react"
import Layout from "../../components/Layout"
import AuthorBio from "../../components/AuthorBio"

const Authors = ({ data }) => {
  return (
    <Layout title="Authors">
      <div className="container">
        {data.authors.edges.map(({ node: author }) => {
          return <AuthorBio author={author} />
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
              fixed(width: 150, height: 150) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`

export default Authors
