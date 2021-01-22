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
    {
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
          parentCategory {
            slug {
              current
            }
            title
          }
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

  posts.forEach(({ node }) => {
    const { category, slug } = node

    const path = category
      ? `/stories/${category.slug.current}/${slug.current}`
      : `/stories/${slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { slug: slug.current },
    })
  })

  categories.forEach(category => {
    const { slug, title, parentCategory } = category

    if (parentCategory) {
      const path = `/stories/${parentCategory.slug.current}`
      const categoryPosts = posts.filter(
        ({ node }) => node.category.slug.current === slug.current
      )

      paginate({
        createPage,
        items: categoryPosts,
        itemsPerPage: 3,
        pathPrefix: path,
        component: require.resolve("./src/templates/parentCategory.js"),
        context: { slug: parentCategory.slug.current, title: parentCategory.title },
      })
    }

    const path = `/stories/${slug.current}`
    const categoryPosts = posts.filter(
      ({ node }) => node.category.slug.current === slug.current
    )

    paginate({
      createPage,
      items: categoryPosts,
      itemsPerPage: 9,
      pathPrefix: path,
      component: require.resolve("./src/templates/category.js"),
      context: { slug: slug.current, title },
    })
  })

  authors.forEach(edge => {
    const path = `/stories/authors/${edge.node.slug.current}`

    const authorPosts = posts.filter(post => {
      return post.node.author.slug.current === edge.node.slug.current
    })

    paginate({
      createPage,
      items: authorPosts,
      itemsPerPage: 9,
      pathPrefix: path,
      component: require.resolve("./src/templates/author.js"),
      context: { slug: edge.node.slug.current, title: edge.node.name },
    })
  })
}
