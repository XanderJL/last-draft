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
      name: "team",
      title: "Team",
      type: "array",
      of: [{ type: "reference", to: { type: "employee" } }],
    },
  ],
};
