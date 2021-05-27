import { Container, Heading, Image } from "@chakra-ui/react"
import AuthorBio from "@components/AuthorBio"
import Layout from "@components/Layout"
import Section from "@components/Layout/Section"
import Link from "@components/Link"
import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"
import toPlainText from "util/toPlainText"

const Author = ({ authorData }) => {
  const { _id, name, bio, slug, image, posts } = authorData
  return (
    <Layout>
      <Container maxW="70ch">
        <Section>
          <AuthorBio name={name} image={image} slug={slug} bio={bio} />
        </Section>
        <Section>
          <Heading as="h3" textTransform="uppercase">
            Latest Stories
          </Heading>
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
              <div key={_id} className="card">
                <div className="card-header">
                  <div className="card-header-icon">
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
                  </div>
                  <div className="card-header-title">
                    <h3 className="is-montserrat is-size-5">
                      <Link to={authorLink}>{name}</Link> in{" "}
                      <Link to={categoryLink}>{category.title} </Link>{" "}
                    </h3>
                    <h3 className="is-montserrat has-text-grey">
                      {publishedAt}
                    </h3>
                  </div>
                </div>
                <div className="card-image">
                  <Link to={postLink}>
                    <Image
                      src={mainImage?.url}
                      options={{ maxWidth: 1600, maxHeight: 900 }}
                    />
                  </Link>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h2 className="title is-montserrat is-uppercase is-size-4-mobile">
                      {title}
                    </h2>
                    <p>{toPlainText(body).slice(0, 119) + "..."}</p>
                  </div>
                  <Link to={postLink} className="button is-montserrat">
                    Read &rsaquo;
                  </Link>
                </div>
              </div>
            )
          })}
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
