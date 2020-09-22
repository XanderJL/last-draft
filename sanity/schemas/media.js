export default {
  name: "media",
  title: "Media",
  type: "array",
  of: [
    {
      name: "image",
      title: "Image",
      type: "blockImage",
    },
    {
      name: "video",
      title: "Video",
      type: "video",
    },
  ],
};
