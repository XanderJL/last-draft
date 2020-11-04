import { BsInfoCircleFill } from "react-icons/bs";

export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: BsInfoCircleFill,
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "metaDescription",
      description:
        "This isn't visible on the webpage, but is important for SEO! Keep in mind Google only shows the first 155-160 characters. Short and sweet is best.",
      type: "metaDescription",
    },
    {
      name: "heroCard",
      title: "Hero Card",
      type: "blockContent",
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
      name: "sectionOne",
      title: "Section One",
      type: "section",
    },
    {
      name: "brands",
      title: "Brands Section",
      type: "array",
      of: [{ type: "reference", to: [{ type: "brands" }] }],
    },
    {
      name: "publication",
      title: "Publication Section",
      type: "section",
    },
    {
      name: "grid",
      title: "Instagram Grid",
      type: "array",
      of: [{ type: "instagramPost" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
