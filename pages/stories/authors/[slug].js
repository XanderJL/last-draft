import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react"
import AuthorBio from "@components/AuthorBio"
import Layout from "@components/Layout"
import Section from "@components/Layout/Section"
import Link from "@components/Link"
import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"
import toPlainText from "util/toPlainText"

const Author = ({ authorData }) => {
  const { name, bio, slug, image, posts } = authorData
  return (
    <Layout>
      <Container maxW="container.md">
        <Section>
          <AuthorBio name={name} image={image} slug={slug} bio={bio} />
        </Section>
        <Section>
          <Heading as="h2" size="xl" textTransform="uppercase" pb="2rem">
            Latest Stories
          </Heading>
          <Stack spacing={8}>
            {posts.map((post) => {
              const {
                _id,
                publishedAt,
                mainImage,
                title,
                body,
                category,
                slug: postSlug,
              } = post
              const authorLink = `/stories/authors/${slug}`
              const categoryLink = `/stories/${category.slug}`
              const postLink = categoryLink + `/${postSlug}`
              return (
                <Box
                  key={_id}
                  boxShadow="lg"
                  border="1px solid"
                  borderColor="gray.50"
                  borderRadius={4}
                >
                  <Stack direction="row" p="1.25rem">
                    <Link href={authorLink}>
                      {image && (
                        <Image
                          boxSize={50}
                          src={image?.url}
                          objectFit="cover"
                          objectPosition="center"
                          bgImage={image?.metadata?.lqip}
                          bgSize="cover"
                          bgPosition="center"
                          bgRepeat="no-repeat"
                          borderRadius="full"
                        />
                      )}
                    </Link>
                    <Box>
                      <Heading
                        as="h3"
                        size="md"
                        textTransform="uppercase"
                        letterSpacing={0}
                      >
                        <Link href={authorLink}>{name}</Link> in{" "}
                        <Link href={categoryLink}>{category.title} </Link>{" "}
                      </Heading>
                      <Heading as="h3" size="md" letterSpacing={0}>
                        {new Date(publishedAt).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </Heading>
                    </Box>
                  </Stack>
                  <Link href={postLink}>
                    <Image
                      src={mainImage?.url}
                      options={{ maxWidth: 1600, maxHeight: 900 }}
                    />
                  </Link>
                  <Stack p="2rem 1.25rem" align="flex-start" spacing={6}>
                    <Heading as="h2" size="lg" textTransform="uppercase">
                      {title}
                    </Heading>
                    <Text>{toPlainText(body).slice(0, 119) + "..."}</Text>
                    <Link
                      as="button"
                      href={postLink}
                      p="0.75rem 1.25rem"
                      bg="black"
                      color="white"
                      _hover={{ bg: "cyan.400" }}
                    >
                      Read &rsaquo;
                    </Link>
                  </Stack>
                </Box>
              )
            })}
          </Stack>
        </Section>
      </Container>
    </Layout>
  )
}

const singleAuthorQuery = groq`
  *[_type == "author" && slug.current == $slug]{
    _id,
    name,
    bio,
    "slug": slug.current,
    "image": image.asset->{
      metadata,
      url
    },
    "posts": *[_type == "post" && references(^._id)]{
      _id,
      publishedAt,
      title,
      body,
      "slug": slug.current,
      "mainImage": mainImage.asset->{
        metadata,
        url
      },
      category->{
        title,
        "slug": slug.current
      }
    }
  }[0]
`

export const getStaticPaths = async () => {
  const authors = await getClient().fetch(
    groq`*[_type == "author"]{ "slug": slug.current }`
  )
  const paths = authors.map((author) => ({ params: { slug: author.slug } }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const authorData = await getClient().fetch(singleAuthorQuery, {
    slug: params.slug,
  })

  return { props: { authorData } }
}

export default Author
