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
    <div className="tabs" style={{margin: "0 1.25rem"}}>
      <ul>
        <Link to="/stories" className="is-montserrat is-uppercase">
          all stories
        </Link>
        {categories.map(category => {
          const { id, slug, title } = category
          return (
            <li key={id}>
              <Link
                to={`/stories/${slug.current}`}
                className="is-montserrat is-uppercase"
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogTabs
