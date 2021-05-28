import { Container, Heading } from "@chakra-ui/layout"
import BlogTabs from "@components/BlogTabs"
import PostCard from "@components/Cards/PostCard"
import SubmitForm from "@components/Forms/SubmitForm"
import Hero from "@components/Hero"
import Layout from "@components/Layout"
import CardGrid from "@components/Layout/Grids/CardGrid"
import Section from "@components/Layout/Section"
import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"
import toPlainText from "util/toPlainText"

const Category = ({ blogData, postsData }) => {
  const { heroImage, categories } = blogData
  const { category, childCategories } = postsData[0]

  return (
    <Layout>
      <Hero
        placeholder={heroImage?.metadata?.lqip}
        image={heroImage?.url}
        minH="36em"
      />
      <Container maxW="container.xl">
        <BlogTabs categories={categories} />
        <Section>
          <Heading textTransform="uppercase" pb="1.5rem">
            {category.title}
          </Heading>
          {childCategories ? (
            <Heading>PRINGUS</Heading>
          ) : (
            <CardGrid>
              {postsData.map((post) => {
                const {
                  _id,
                  title,
                  mainImage,
                  slug,
                  category,
                  previewCopy,
                  body,
                } = post
                return (
                  <PostCard
                    key={_id}
                    title={title}
                    placeholder={mainImage?.metadata?.lqip}
                    image={mainImage?.url}
                    link={`/stories/${category?.slug}/${slug}`}
                  >
                    {previewCopy
                      ? previewCopy
                      : toPlainText(body).slice(0, 124) + "..."}
                  </PostCard>
                )
              })}
            </CardGrid>
          )}
        </Section>
        <Section>
          <SubmitForm />
        </Section>
      </Container>
    </Layout>
  )
}

const blogQuery = groq`
*[_type == "blog"]{
  "heroImage": heroImage.asset->{
    metadata,
    url
  },
  categories[!defined(parentCategory)]->{
    _id,
    title,
    "slug": slug.current
  }
}[0]
`

const postsQuery = groq`
  *[_type == "post" && category->slug.current == $category] | order(publishedAt desc) {
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
`

export const getStaticPaths = async () => {
  const blog = await getClient().fetch(blogQuery)
  const paths = blog.categories.map((category) => ({
    params: { category: category.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const blogData = await getClient().fetch(blogQuery)
  const postsData = await getClient().fetch(postsQuery, {
    category: params.category,
  })

  return { props: { blogData, postsData } }
}

export default Category
