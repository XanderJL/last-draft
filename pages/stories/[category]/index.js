import { getClient } from "@lib/sanity/sanity.server"
import { groq } from "next-sanity"
import dynamic from "next/dynamic"
const CategoryTemplate = dynamic(
  () => import("@components/Templates/Stories/CategoryTemplate"),
  { ssr: false }
)
const ParentCategoryTemplate = dynamic(
  () => import("@components/Templates/Stories/ParentCategoryTemplate"),
  { ssr: false }
)

const Category = ({ blogData, postsData, categoriesData }) => {
  if (categoriesData.isParent) {
    return (
      <ParentCategoryTemplate
        blogData={blogData}
        categoriesData={categoriesData}
      />
    )
  }
  return <CategoryTemplate blogData={blogData} postsData={postsData} />
}

const blogQuery = groq`
*[_type == "blog"]{
  "heroImage": heroImage.asset->{
    metadata,
    url
  },
  "allCategories": *[_type == "category"]{
    "slug": slug.current,
  },
  "categoryTabs": categories[!defined(parentCategory)]->{
    _id,
    title,
    "slug": slug.current,
    "childCategories": *[_type == "category" && references(^._id)]{
      _id,
      title,
      "slug": slug.current
    }
  }
}[0]
`

const childCategoriesQuery = groq`
  *[_type == "category" && slug.current == $category] {
    _id,
    isParent,
    "childCategories": *[_type == "category" && references(^._id)]{
      _id,
      title,
      description,
      "slug": slug.current,
      "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        category->{
          isParent,
          "slug": slug.current,
          title
        },
        body,
        "mainImage": mainImage.asset->{
          metadata,
          url
        }
      }[0..2]
    }
  }[0]
`

const postsQuery = groq`
  *[_type == "post" && category->slug.current == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category->{
      isParent,
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
  const paths = blog.allCategories.map((category) => ({
    params: {
      category: category.slug,
    },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const blogData = await getClient().fetch(blogQuery)
  const postsData = await getClient().fetch(postsQuery, {
    category: params.category,
  })
  const categoriesData = await getClient().fetch(childCategoriesQuery, {
    category: params.category,
  })

  return { props: { blogData, postsData, categoriesData } }
}

export default Category
