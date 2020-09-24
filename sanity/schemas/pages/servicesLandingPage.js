export default {
  name: "servicesLandingPage",
  title: "Services Landing Page",
  type: "document",
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
      name: "offeredServices",
      title: "Offered Services",
      type: "array",
      of: [{ type: "offeredServices" }],
    },
  ],
};
