import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"
import dynamic from "next/dynamic"
const CategoryTemplate = dynamic(
  () => import("@components/Stories/CategoryTemplate"),
  { ssr: false }
)

const Category = ({ blogData, postsData }) => {
  return <CategoryTemplate blogData={blogData} postsData={postsData} />
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
