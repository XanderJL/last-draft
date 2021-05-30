import { Container, Heading, Image, Text } from "@chakra-ui/react"
import { groq } from "next-sanity"
import { getClient } from "@lib/sanity/sanity.server"
import Layout from "@components/Layout"
import Hero from "@components/Hero"
import BlogTabs from "@components/BlogTabs"
import { PortableText, serializers, urlFor } from "@lib/sanity"
import Section from "@components/Layout/Section"
import PostCard from "@components/Cards/PostCard"
import CardGrid from "@components/Layout/Grids/CardGrid"
import SubmitForm from "@components/Forms/SubmitForm"
import OptInModal from "@components/Modals/OptInModal"
import Link from "@components/Link"
import toPlainText from "util/toPlainText"

const Stories = ({ blogData, recentPostData }) => {
  const { heroImage, pubBody, categoryTabs } = blogData

  console.log({ blogData })

  return (
    <Layout>
      <Hero
        placeholder={heroImage?.metadata?.lqip}
        image={heroImage?.url}
        minH="36em"
      />
      <Container maxW="container.xl">
        <BlogTabs categoryTabs={categoryTabs} />
        <Section p="0 1.25rem">
          <PortableText
            blocks={pubBody}
            serializers={{
              ...serializers,
              types: {
                ...serializers.types,
                blockImage: (props) => {
                  const { image } = props.node
                  return <Image src={urlFor(image)} maxH="140px" w="auto" />
                },
              },
            }}
          />
        </Section>
        <Section>
          <Heading textTransform="uppercase" pb="1.5rem">
            Recent
          </Heading>
          <CardGrid>
            {recentPostData.map((post) => {
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
                  link={`/${category?.slug}/${slug}`}
                >
                  {previewCopy
                    ? previewCopy
                    : toPlainText(body).slice(0, 124) + "..."}
                </PostCard>
              )
            })}
          </CardGrid>
        </Section>
        {categoryTabs.map((category) => {
          const { _id, title, slug, description, posts } = category
          return (
            <Section key={_id}>
              <Heading textTransform="uppercase" pb="1rem">
                {title}
              </Heading>
              {description && <Text pb="3rem">{description}</Text>}
              <CardGrid pb={{ base: 6, md: 12 }}>
                {posts.map((post) => {
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
              <Link
                href={`/stories/${slug}`}
                p="1rem 1.25rem"
                bg="black"
                color="white"
                _hover={{ bg: "cyan.400" }}
              >
                More Articles
              </Link>
            </Section>
          )
        })}
        <Section>
          <SubmitForm />
        </Section>
      </Container>
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
  "pubBody": publication.body,
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
  },
  "allCategories": *[_type == "category"]{
    "slug": slug.current,
  },
  "categoryTabs": categories[!defined(parentCategory)]->{
    _id,
    title,
    "slug": slug.current,
    description,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
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
    }[0..2]
  }
}[0]
`

const recentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc){
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
  }[0..2]
`

export const getStaticProps = async () => {
  const blogData = await getClient().fetch(blogQuery)
  const recentPostData = await getClient().fetch(recentPostsQuery)

  return { props: { blogData, recentPostData } }
}

export default Stories
