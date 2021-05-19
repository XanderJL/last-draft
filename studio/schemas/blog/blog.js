export default {
  name: "blog",
  title: "The Last Draft",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publication",
      title: "Publication Copy",
      type: "section",
    },
    {
      name: "featuredPosts",
      title: "Featured Posts",
      type: "featuredPosts",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "postFooter",
      title: "Post Footer",
      description: "Content for the footer of every blog post.",
      type: "blockContent",
    },
  ],
};
