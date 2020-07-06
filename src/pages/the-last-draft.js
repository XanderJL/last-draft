import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import toPlainText from "../hooks/toPlainText"

const TheLastDraft = ({ data }) => {
  const { blog, posts } = data
  const { title, categories, heroImage } = blog
  const positionStyles = heroImage.hotspot
    ? {
        backgroundPositionX: `${heroImage.hotspot.x * 100}%`,
        backgroundPositionY: `${heroImage.hotspot.y * 100}%`,
      }
    : {}

  return (
    <Layout title={title}>
      <Hero fluid={heroImage.asset.fluid} styles={positionStyles} />
      <div className="tabs">
        <div className="container">
          <ul>
            {categories.map(category => {
              const { id, slug, title } = category
              return (
                <li key={id}>
                  <Link to={`/the-last-draft/#${id}`}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {categories.map(category => {
        const { id, slug, title } = category
        const link = `/the-last-draft/${slug.current}`

        return (
          <section key={id} id={id} className="section">
            <div className="container">
              <Link to={"/the-last-draft/" + slug.current}>
                <h2 className="title is-size-2-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black">
                  {title}
                </h2>
              </Link>
              <div className="wrapper-post" style={{ padding: "2rem 0" }}>
                {posts.edges
                  .filter(
                    ({ node: post }) =>
                      post.category.slug.current === slug.current
                  )
                  .map(({ node: post }) => {
                    const {
                      id,
                      title,
                      mainImage,
                      _rawBody,
                      category,
                      slug,
                    } = post
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
                        {toPlainText(_rawBody).slice(0, 159) + "..."}
                      </PostCard>
                    )
                  })}
              </div>
              <Link to={link} className="button is-size-5">
                More Articles &rsaquo;
              </Link>
            </div>
          </section>
        )
      })}
    </Layout>
  )
}

export const data = graphql`
  {
    blog: sanityBlog {
      title
      slug {
        current
      }
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
      categories {
        id
        slug {
          current
        }
        title
      }
    }
    posts: allSanityPost {
      edges {
        node {
          id
          slug {
            current
          }
          title
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
          _rawBody
          category {
            slug {
              current
            }
          }
        }
      }
    }
  }
`

export default TheLastDraft
