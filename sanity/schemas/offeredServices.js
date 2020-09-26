export default {
  name: "offeredServices",
  title: "Offered Services",
  type: "object",
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "bulletPoints",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
