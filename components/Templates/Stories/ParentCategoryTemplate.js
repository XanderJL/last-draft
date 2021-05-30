import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import BlogTabs from "@components/BlogTabs"
import PostCard from "@components/Cards/PostCard"
import SubmitForm from "@components/Forms/SubmitForm"
import Hero from "@components/Hero"
import Layout from "@components/Layout"
import CardGrid from "@components/Layout/Grids/CardGrid"
import Section from "@components/Layout/Section"
import Link from "@components/Link"
import React from "react"
import toPlainText from "util/toPlainText"

const ParentCategoryTemplate = ({ blogData, categoriesData }) => {
  const { heroImage, categoryTabs } = blogData
  const { title, description, childCategories } = categoriesData

  return (
    <Layout title={title} description={description}>
      <Hero
        placeholder={heroImage?.metadata?.lqip}
        image={heroImage?.url}
        minH="36em"
      />
      <Container maxW="container.xl">
        <BlogTabs categoryTabs={categoryTabs} />
        <Box>
          {childCategories.map((category) => {
            const { _id, title, description, posts, slug } = category
            return (
              <Section key={_id}>
                <Heading textTransform="uppercase" pb="1.5rem">
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
        </Box>
        <Section>
          <SubmitForm />
        </Section>
      </Container>
    </Layout>
  )
}

export default ParentCategoryTemplate
