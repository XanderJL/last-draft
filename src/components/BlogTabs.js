import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogTabs = () => {
  const data = useStaticQuery(graphql`
    {
      blog: sanityBlog {
        categories {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `)
  const { blog } = data
  const { categories } = blog
  return (
    <div className="tabs">
      <div className="container">
        <ul>
          <Link to="/the-last-draft" className="is-montserrat is-uppercase">
            all stories
          </Link>
          <Link
            to={`/the-last-draft/recent`}
            className="is-montserrat is-uppercase"
          >
            recent
          </Link>
          {categories.map(category => {
            const { id, slug, title } = category
            return (
              <li key={id}>
                <Link
                  to={`/the-last-draft/${slug.current}`}
                  className="is-montserrat is-uppercase"
                >
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BlogTabs
