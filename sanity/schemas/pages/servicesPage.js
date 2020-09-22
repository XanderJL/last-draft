import { RiServiceLine } from "react-icons/ri";

export default {
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  icon: RiServiceLine,
  fields: [
    {
      name: "title",
      title: "Page Title",
      type: "string",
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
      name: "heroCard",
      title: "Hero Card",
      type: "blockContent",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
    },
  ],
};
