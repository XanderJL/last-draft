import { Container, Heading, Text } from "@chakra-ui/layout"
import AuthorBio from "@components/AuthorBio"
import Hero from "@components/Hero"
import { SolidHr } from "@components/Hr"
import Layout from "@components/Layout"
import Section from "@components/Layout/Section"
import Link from "@components/Link"
import Tags from "@components/Tags"
import { PortableText } from "@lib/sanity"
import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"
import toPlainText from "util/toPlainText"

const Post = ({ postData, footerCopy }) => {
  const {
    title,
    author,
    publishedAt,
    tags,
    mainImage,
    mainAlt,
    mainCaption,
    body,
  } = postData

  return (
    <Layout title={title} description={toPlainText(body)}>
      <Hero
        placeholder={mainImage?.metadata?.lqip}
        image={mainImage?.url}
        minH="36em"
      />
      <Container maxW="container.md">
        {mainCaption && (
          <Section p="1.25rem">
            <Text fontStyle="italic" color="gray.500">
              {mainCaption}
            </Text>
          </Section>
        )}
        <Section textAlign="center">
          <Heading textTransform="uppercase">{title}</Heading>
          <Link
            href={`/stories/authors/${author.slug}`}
            textTransform="uppercase"
          >
            {author.name}
          </Link>
          <Text>
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        </Section>
        <Section>
          <PortableText blocks={body} />
          <SolidHr />
          <AuthorBio
            slug={author?.slug}
            name={author?.name}
            image={author?.image}
            bio={author?.bio}
          />
          <PortableText blocks={footerCopy.postFooter} />
          {tags?.length > 0 && <Tags tags={tags} />}
        </Section>
      </Container>
    </Layout>
  )
}

const postQuery = groq`
  *[_type == "post" && slug.current == $post]{
    _id,
    title,
    author->{
      "slug": slug.current,
      name,
      "image": image.asset->{
        metadata,
        url
      },
      bio
    },
    tags,
    title,
    publishedAt,
    "mainImage": mainImage.asset->{
      metadata,
      url
    },
    mainAlt,
    mainCaption,
    body
  }[0]
`

export const getStaticPaths = async () => {
  const posts = await getClient().fetch(groq`
    *[_type == "post"]{
      "slug": slug.current,
      category->{
        "slug": slug.current
      }
    }
  `)
  const paths = posts.map((post) => ({
    params: { category: post.category.slug, post: post.slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getClient().fetch(postQuery, {
    post: params.post,
  })
  const footerCopy = await getClient().fetch(groq`
    *[_type == "blog"]{
      postFooter
    }[0]
  `)

  return { props: { postData, footerCopy } }
}

export default Post
