import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import toPlainText from "../hooks/toPlainText"

const TheLastDraft = ({ data }) => {
  const { blog, posts, latestPosts } = data
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
            <Link
              to={`/the-last-draft/#featured`}
              className="is-montserrat is-uppercase"
            >
              featured
            </Link>
            <Link
              to={`/the-last-draft/#recent`}
              className="is-montserrat is-uppercase"
            >
              recent
            </Link>
            {categories.map(category => {
              const { id, slug, title } = category
              return (
                <li key={id}>
                  <Link
                    to={`/the-last-draft/#${slug.current}`}
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
      <section id="featured" className="section">
        <div className="container">
          <h2 className="title is-size-2-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black">
            Featured
          </h2>
          <hr />
          <div className="wrapper-post" style={{ padding: "2rem 0" }}>
            {posts.edges
              .filter(({ node: post }) => post.featuredPost)
              .map(({ node: post }) => {
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
                    {toPlainText(_rawBody).slice(0, 159) + "..."}
                  </PostCard>
                )
              })}
          </div>
        </div>
      </section>
      <section id="recent" className="section">
        <div className="container">
          <h2 className="title is-size-2-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black">
            Recent
          </h2>
          <hr />
          <div className="wrapper-post" style={{ padding: "2rem 0" }}>
            {latestPosts.edges.map(({ node: post }) => {
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
                  {toPlainText(_rawBody).slice(0, 159) + "..."}
                </PostCard>
              )
            })}
          </div>
        </div>
      </section>
      {categories.map(category => {
        const { id, slug, title } = category
        const link = `/the-last-draft/${slug.current}`

        return (
          <section key={id} id={slug.current} className="section">
            <div className="container">
              <Link to={"/the-last-draft/" + slug.current}>
                <h2 className="title is-size-2-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black">
                  {title}
                </h2>
                <hr />
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
          featuredPost
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
    latestPosts: allSanityPost(
      limit: 5
      sort: { fields: _createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          featuredPost
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
