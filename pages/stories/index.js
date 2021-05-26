import { Box, Text } from "@chakra-ui/react"
import { groq } from "next-sanity"
import { getClient } from "@lib/sanity/sanity.server"

const Stories = ({ data }) => {
  const { blog, posts, latestPosts, featuredPosts } = data
  const { title, categories, heroImage, _rawPublication } = blog
  const pubBody = _rawPublication.body

  const SectionRenderer = (props) => {
    const { style = "normal" } = props.node

    if (/^h\d/.test(style)) {
      return React.createElement(
        style,
        {
          className: `title is-montserrat is-uppercase has-text-black is-size-4-mobile`,
        },
        props.children
      )
    }

    if (style === "blockquote") {
      return <blockquote>- {props.children}</blockquote>
    }

    // Fall back to default handling
    return PortableText.defaultSerializers.types.block(props)
  }
  const BlockImageRenderer = (props) => {
    return (
      <Box maxW="264px" maxH="auto">
        <SanityImage
          image={props.node.image.asset}
          options={{ maxWidth: 800, maxHeight: 600 }}
          layout="fixed"
          style={{
            maxWidth: "inherit",
            maxHeight: "inherit",
          }}
          imgStyle={{
            maxWidth: "inherit",
            maxHeight: "inherit",
          }}
          objectFit="contain"
          alt={props.node.alt}
        />
      </Box>
    )
  }

  return (
    <Layout title={title}>
      <Hero
        image={getGatsbyImageData(
          heroImage.asset,
          { maxWidth: 1440 },
          sanityConfig
        )}
        styles={imageHotspot(heroImage.hotspot)}
        size="large"
      />
      <div className="container" style={{ maxWidth: "1216px" }}>
        <BlogTabs />
        <Box
          as="section"
          p={{ base: "1.25rem", md: "2rem 1.25rem 3rem 1.25rem" }}
        >
          <Box
            css={css`
              img {
                margin-bottom: 1rem;
                max-height: 128px;
              }
              p {
                margin-bottom: 1rem;
              }
            `}
          >
            <PortableText
              blocks={pubBody}
              serializers={{
                types: {
                  block: SectionRenderer,
                  blockImage: BlockImageRenderer,
                },
              }}
            />
          </Box>
        </Box>
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
              const {
                id,
                title,
                mainImage,
                _rawBody,
                previewCopy,
                category,
                slug,
              } = post
              const image = mainImage.asset
              const link = category.parentCategory
                ? `/stories/${category.parentCategory.slug.current}/${category.slug.current}/${slug.current}`
                : `/stories/${category.slug.current}/${slug.current}`
              return (
                <PostCard key={id} title={title} image={image} link={link}>
                  {previewCopy
                    ? previewCopy
                    : toPlainText(_rawBody).slice(0, 159) + "..."}
                </PostCard>
              )
            })}
          </div>
        </section>
        <section id="featured" className="section">
          <h2
            className="title is-size-3-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black"
            style={{ marginBottom: "0" }}
          >
            Featured
          </h2>
          <hr style={{ margin: "0.75rem 0" }} />
          <div className="wrapper-post" style={{ padding: "2rem 0" }}>
            {featuredPosts.featuredPosts.map((post) => {
              const {
                id,
                title,
                mainImage,
                _rawBody,
                previewCopy,
                category,
                slug,
              } = post
              const image = mainImage.asset
              const link = category.parentCategory
                ? `/stories/${category.parentCategory.slug.current}/${category.slug.current}/${slug.current}`
                : `/stories/${category.slug.current}/${slug.current}`
              return (
                <PostCard
                  key={id}
                  title={title}
                  image={image}
                  link={link}
                  cardStyle={{ maxWidth: "420px" }}
                >
                  {previewCopy
                    ? previewCopy
                    : toPlainText(_rawBody).slice(0, 159) + "..."}
                </PostCard>
              )
            })}
          </div>
        </section>
        {categories.map((category) => {
          const { id, slug, title, description } = category
          const link = `/stories/${slug.current}`

          return (
            <section key={id} id={slug.current} className="section-category">
              <Link to={"/stories/" + slug.current}>
                <h2 className="title is-size-2-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black">
                  {title}
                </h2>
                <hr />
              </Link>
              {description && <Text maxW="75ch">{description}</Text>}
              <div className="wrapper-post" style={{ padding: "2rem 0" }}>
                {posts.edges
                  .filter(
                    ({ node: post }) =>
                      post.category.slug.current === slug.current
                  )
                  .slice(0, 3)
                  .map(({ node: post }) => {
                    const {
                      id,
                      title,
                      mainImage,
                      _rawBody,
                      previewCopy,
                      category,
                      slug,
                    } = post
                    const image = mainImage.asset
                    const link = `/stories/${category.slug.current}/${slug.current}`
                    return (
                      <PostCard
                        key={id}
                        title={title}
                        image={image}
                        link={link}
                        cardStyle={{ maxWidth: "420px" }}
                      >
                        {previewCopy
                          ? previewCopy
                          : toPlainText(_rawBody).slice(0, 159) + "..."}
                      </PostCard>
                    )
                  })}
              </div>
              <Link to={link} className="button is-size-5">
                More Articles &rsaquo;
              </Link>
            </section>
          )
        })}
        <section className="section">
          <SubmitForm />
        </section>
      </div>
      <OptInModal />
    </Layout>
  )
}

const blogQuery = groq`
*[_type == "blog"]{
  title,
  "slug": slug.current,
  "heroImage": heroImage.asset->{
    metadata,
    url
  },
  publication,
  categories[]->{
    _id,
    "slug": slug.current,
    title,
    description
  },
  featuredPosts[]->{
    _id,
    title,
    "slug": slug.current,
    category->{
      "slug": slug.current,
      title
    },
    body,
    "mainImage": mainImage.asset->{
      metadata,
      url
    }
  }
}[0]
`

const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    publishedAt,
    "slug": slug.current,
    title,
    "mainImage": mainImage.asset->{
      metadata,
      url
    },
    previewCopy,
    body,
    category->{
      "slug": slug.current
    },
    parentCategory->{
      "slug": slug.current
    }
  }
`

const featuredPostsQuery = groq`
  *[_type == "post"]{}
`

export const getStaticProps = async () => {
  const blogData = await getClient().fetch(blogQuery)
}

export default Stories
