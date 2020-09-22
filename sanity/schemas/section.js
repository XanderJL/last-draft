export default {
  name: "section",
  title: "Section",
  type: "object",
  fields: [
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
    },
  ],
};
