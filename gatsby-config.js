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
    transformer: ({ data }) => data.allSanityPost.edges.map(({ node }) => node),
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
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
        enablePartialUpdates: false,
        matchFields: ["author", "title", "category"],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `khue65vd`,
        dataset: `production`,
        watchMode: false,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `7754513853`,
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
