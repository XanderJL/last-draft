require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const algoliaQuery = `{
  allSanityPost {
    edges {
      node {
        id
        _rawBody
        author {
          name
        }
        category {
          title
          slug {
            current
          }
        }
        title
        slug {
          current
        }
      }
    }
  }
}`

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) => {
      function toPlainText(blocks = []) {
        return (
          blocks
            // loop through each block
            .map(block => {
              if (block._type !== "block" || !block.children) {
                return ""
              }
              return block.children.map(child => child.text).join("")
            })
            .join("\n\n")
        )
      }

      return data.allSanityPost.edges.map(({ node: post }) => {
        const { id, slug, category, title, author, _rawBody } = post
        const body = toPlainText(_rawBody)
        const chunk = {
          id,
          slug,
          category,
          title,
          author: author.name,
          body,
        }
        return chunk
      })
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Last Draft`,
    description: `Last Draft is grounded in a firm belief that ethical stories are the catalysts of technological development, economic progress, social evolution, and positive change.`,
    author: `Alex Low`,
    siteUrl: `https://lastdraft.ca/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-awesome-pagination`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 1000,
        enablePartialUpdates: true,
        matchFields: ["author", "title", "category"],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `khue65vd`,
        dataset: `production`,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMoxJpeg: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
