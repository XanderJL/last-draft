import { Container, Heading } from "@chakra-ui/layout"
import BlogTabs from "@components/BlogTabs"
import PostCard from "@components/Cards/PostCard"
import SubmitForm from "@components/Forms/SubmitForm"
import Hero from "@components/Hero"
import Layout from "@components/Layout"
import CardGrid from "@components/Layout/Grids/CardGrid"
import Section from "@components/Layout/Section"
import React from "react"
import toPlainText from "util/toPlainText"

const CategoryTemplate = ({ blogData, postsData }) => {
  const { heroImage, categoryTabs } = blogData
  const { category } = postsData[0]
  return (
    <Layout>
      <Hero
        placeholder={heroImage?.metadata?.lqip}
        image={heroImage?.url}
        minH="36em"
      />
      <Container maxW="container.xl">
        <BlogTabs categoryTabs={categoryTabs} />
        <Section>
          <Heading textTransform="uppercase" pb="1.5rem">
            {category.title}
          </Heading>
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
        </Section>
        <Section>
          <SubmitForm />
        </Section>
      </Container>
    </Layout>
  )
}

export default CategoryTemplate
