export default {
  name: "landingCard",
  title: "Landing Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "service",
      title: "Related Service",
      type: "reference",
      to: { type: "service" },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
