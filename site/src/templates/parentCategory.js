import * as React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import BlogTabs from "../components/BlogTabs"
import toPlainText from "../hooks/toPlainText"
import imageHotspot from "../hooks/imageHotspot"
import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react"
import sanityConfig from "../lib/sanityConfig"
import { getGatsbyImageData } from "gatsby-source-sanity"

const ParentCategory = ({ data, pageContext }) => {
  const { blog, category, childCategories, posts } = data

  const heroImageData = (image) =>
    getGatsbyImageData(image, { maxWidth: 1920 }, sanityConfig)

  return (
    <Layout title={pageContext.title}>
      <Hero
        fluid={
          category.heroImage && category.heroImage.asset
            ? category.heroImage.asset
            : blog.heroImage.asset
        }
        style={imageHotspot(
          category.heroImage
            ? category.heroImage.hotspot
            : blog.heroImage.hotspot
        )}
      />
      <div className="container" style={{ maxWidth: "1216px" }}>
        <BlogTabs />
        <section className="section">
          {childCategories.edges.map(({ node: { title, slug } }) => (
            <Box>
              <Heading
                as="h1"
                mb="1.5rem"
                textTransform="uppercase"
                letterSpacing="0.12em"
                fontSize="2rem"
                color="black"
              >
                {title}
              </Heading>
              <Grid
                templateColumns="repeat(auto-fill, minmax(325px, 1fr))"
                gap="32px"
                mb="2rem"
              >
                {posts.edges
                  .filter(({ node }) => node.category.title === title)
                  .map(({ node }) => {
                    const {
                      id,
                      title,
                      mainImage,
                      bodyRaw,
                      previewCopy,
                      category,
                      slug,
                    } = node
                    const image = mainImage.asset
                    const link = `/stories/${category.parentCategory.slug.current}/${category.slug.current}/${slug.current}`
                    return (
                      <PostCard
                        key={id}
                        title={title}
                        image={image}
                        link={link}
                        cardStyle={{ maxWidth: "420px" }}
                      >
                        <Text>
                          {previewCopy
                            ? previewCopy
                            : toPlainText(bodyRaw).slice(0, 159) + "..."}
                        </Text>
                      </PostCard>
                    )
                  })}
              </Grid>
              <Link
                as={GatsbyLink}
                to={`/stories/${slug.current}`}
                color="white"
                className="button is-size-5"
                mb="5rem"
              >
                More Articles &rsaquo;
              </Link>
            </Box>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    blog: sanityBlog {
      heroImage {
        asset {
          url
        }
        hotspot {
          x
          y
        }
      }
    }
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      title
      heroImage {
        asset {
          url
        }
        hotspot {
          x
          y
        }
      }
    }
    childCategories: allSanityCategory(
      filter: { parentCategory: { slug: { current: { eq: $slug } } } }
    ) {
      edges {
        node {
          title
          slug {
            current
          }
          heroImage {
            asset {
              url
            }
            hotspot {
              x
              y
            }
          }
        }
      }
    }
    posts: allSanityPost(
      filter: {
        category: { parentCategory: { slug: { current: { eq: $slug } } } }
      }
      sort: { fields: publishedAt, order: DESC }
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
            parentCategory {
              slug {
                current
              }
            }
          }
          previewCopy
          bodyRaw
          mainImage {
            asset {
              url
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
export default ParentCategory
