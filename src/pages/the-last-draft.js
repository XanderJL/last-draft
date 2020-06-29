import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
      {categories.map(category => {
        const { id, slug, title } = category
        const link = `/the-last-draft/${slug.current}`

        return (
          <section key={id} className="section">
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
              <Link to={link} className="button is-primary has-text-white">
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
