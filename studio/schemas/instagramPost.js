export default {
  name: "instagramPost",
  title: "Instagram Post",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
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
      title: "Alt Text",
      type: "string",
    },
    {
      name: "url",
      title: "Post URL",
      type: "url",
    },
  ],
};
