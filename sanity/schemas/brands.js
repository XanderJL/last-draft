import { MdBusinessCenter } from "react-icons/md";

export default {
  name: "brands",
  title: "Brands",
  type: "document",
  icon: MdBusinessCenter,
  fields: [
    {
      name: "logo",
      title: "Brand Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative Text",
      description: "Important for SEO and accessibility",
      type: "string",
    },
    {
      name: "brandName",
      title: "Brand Name",
      type: "string",
    },
    {
      name: "brandRep",
      title: "Brand Representative",
      type: "string",
    },
    {
      name: "repTitle",
      title: "Rep Title",
      type: "string",
    },
    {
      name: "brandUrl",
      title: "Brand Website",
      type: "url",
    },
    {
      name: "testimonial",
      title: "Testimonial",
      description:
        "If the client/partner offers a testimonial, you can add it here to have it displayed on the home page.",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "brandName",
      media: "logo",
    },
  },
};
