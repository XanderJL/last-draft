const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
      posts: allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
            category {
              slug {
                current
              }
            }
          }
        }
      }
      categories: allSanityCategory(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  if (res.errors) {
    throw res.errors
  }

  const posts = res.data.posts.edges
  const categories = res.data.categories.edges

  posts.forEach(edge => {
    const path = edge.node.category
      ? `/the-last-draft/${edge.node.category.slug.current}/${edge.node.slug.current}`
      : `/the-last-draft/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  categories.forEach(edge => {
    const path = `/the-last-draft/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/category.js"),
      context: { slug: edge.node.slug.current, title: edge.node.title },
    })
  })
}
