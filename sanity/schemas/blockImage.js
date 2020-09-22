export default {
  name: "blockImage",
  title: "Image",
  type: "object",
  fields: [
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
      description:
        "A descriptive sentence about the image. Important for SEO and accessibility!",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
