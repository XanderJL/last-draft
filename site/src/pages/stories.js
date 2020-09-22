import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import BlogTabs from "../components/BlogTabs"
import toPlainText from "../hooks/toPlainText"
import imageHotspot from "../hooks/imageHotspot"

const TheLastDraft = ({ data }) => {
  const { blog, posts, latestPosts, featuredPosts } = data
  const { title, categories, heroImage } = blog

  return (
    <Layout title={title}>
      <Hero
        fluid={heroImage.asset.fluid}
        styles={imageHotspot(heroImage.hotspot)}
      />
      <div className="container" style={{ maxWidth: "1216px" }}>
        <BlogTabs />
        <section id="featured" className="section">
          <h2
            className="title is-size-3-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black"
            style={{ marginBottom: "0" }}
          >
            Featured
          </h2>
          <hr style={{ margin: "0.75rem 0" }} />
          <div className="wrapper-post" style={{ padding: "2rem 0" }}>
            {featuredPosts.featuredPosts.map(post => {
              const { id, title, mainImage, _rawBody, category, slug } = post
              const image = mainImage.asset.fluid
              const link = `/stories/${category.slug.current}/${slug.current}`
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
        </section>
        <section id="recent" className="section-category">
          <h2
            className="title is-size-3-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black"
            style={{ marginBottom: "0" }}
          >
            Recent
          </h2>
          <hr style={{ margin: "0.75rem 0" }} />
          <div className="wrapper-post" style={{ padding: "2rem 0" }}>
            {latestPosts.edges.map(({ node: post }) => {
              const { id, title, mainImage, _rawBody, category, slug } = post
              const image = mainImage.asset.fluid
              const link = `/stories/${category.slug.current}/${slug.current}`
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
        </section>
        {categories.map(category => {
          const { id, slug, title } = category
          const link = `/stories/${slug.current}`

          return (
            <section key={id} id={slug.current} className="section-category">
              <Link to={"/stories/" + slug.current}>
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
                    const link = `/stories/${category.slug.current}/${slug.current}`
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
              {/* <Link to={link} className="button is-size-5">
                More Articles &rsaquo;
              </Link> */}
            </section>
          )
        })}
      </div>
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
    posts: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
          publishedAt
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
    latestPosts: allSanityPost(
      limit: 3
      sort: { fields: publishedAt, order: DESC }
    ) {
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
    featuredPosts: sanityBlog {
      featuredPosts {
        id
        title
        slug {
          current
        }
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
      }
    }
  }
`

export default TheLastDraft
