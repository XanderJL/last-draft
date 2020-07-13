const { paginate } = require("gatsby-awesome-pagination")
const path = require("path")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

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
            author {
              slug {
                current
              }
            }
          }
        }
      }
      sanityBlog {
        categories {
          slug {
            current
          }
          title
        }
      }
      authors: allSanityAuthor(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            name
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    throw res.errors
  }

  const posts = res.data.posts.edges
  const categories = res.data.sanityBlog.categories
  const authors = res.data.authors.edges

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

  categories.forEach(category => {
    const path = `/the-last-draft/${category.slug.current}`

    const categoryPosts = posts.filter(post => {
      return post.node.category.slug.current === category.slug.current
    })

    paginate({
      createPage,
      items: categoryPosts,
      itemsPerPage: 10,
      pathPrefix: path,
      component: require.resolve("./src/templates/category.js"),
      context: { slug: category.slug.current, title: category.title },
    })
  })

  authors.forEach(edge => {
    const path = `/the-last-draft/authors/${edge.node.slug.current}`

    const authorPosts = posts.filter(post => {
      return post.node.author.slug.current === edge.node.slug.current
    })

    paginate({
      createPage,
      items: authorPosts,
      itemsPerPage: 10,
      pathPrefix: path,
      component: require.resolve("./src/templates/author.js"),
      context: { slug: edge.node.slug.current, title: edge.node.name },
    })
  })
}
