import React from "react"
import { graphql, Link as GatsbyLink } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import PostCard from "../components/PostCard"
import BlogTabs from "../components/BlogTabs"
import toPlainText from "../hooks/toPlainText"
import imageHotspot from "../hooks/imageHotspot"
import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react"

const ParentCategory = ({ data, pageContext }) => {
  const { blog, category, childCategories, posts } = data

  return (
    <Layout title={pageContext.title}>
      <Hero
        fluid={
          category.heroImage && category.heroImage.asset
            ? category.heroImage.asset.fluid
            : blog.heroImage.asset.fluid
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
                      _rawBody,
                      previewCopy,
                      category,
                      slug,
                    } = node
                    const image = mainImage.asset.fluid
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
                            : toPlainText(_rawBody).slice(0, 159) + "..."}
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
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
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
          fluid(maxWidth: 1920) {
            src
          }
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
              fluid(maxWidth: 1920) {
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
