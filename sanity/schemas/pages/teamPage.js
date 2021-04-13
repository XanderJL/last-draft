export default {
  name: "teamPage",
  title: "Team Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subheading",
      title: "Subheading",
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
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "reference", to: { type: "employee" } }],
    },
  ],
};
