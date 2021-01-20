import { AiFillHome } from "react-icons/ai";
export default {
  name: "indexPage",
  title: "Home Page",
  icon: AiFillHome,
  type: "document",
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
      type: "text",
    },
    {
      name: "heroCard",
      title: "Hero Card",
      type: "blockContent",
    },
    {
      name: "cardsTitle",
      title: "Landing Cards Title",
      type: "string",
    },
    {
      name: "cards",
      title: "Landing Cards",
      type: "array",
      of: [{ type: "landingCard" }],
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
      name: "testimonials",
      title: "Testimonials Section",
      type: "array",
      of: [{ type: "reference", to: [{ type: "brands" }] }],
    },
    {
      name: "contactHeading",
      title: "Contact Section Heading",
      type: "string",
    },
    {
      name: "contactBody",
      title: "Contact Section Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
