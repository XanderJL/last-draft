export default {
  name: "featuredPosts",
  title: "Featured Posts",
  type: "array",
  of: [
    {
      type: "reference",
      to: [{ type: "post" }],
    },
  ],
};
