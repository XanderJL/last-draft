import { FiBook } from "react-icons/fi";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: FiBook,
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
      name: "isParent",
      title: "Is Parent Category",
      type: "boolean",
    },
    {
      name: "parentCategory",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "heroImage",
      title: "Hero Image",
      description:
        "Image for the category's hero banner. If it's not set here, it will default to the image for \"The Last Draft\"",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
