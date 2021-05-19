export default {
  name: "hr",
  type: "object",
  title: "Break",
  fields: [
    {
      name: "style",
      type: "string",
      title: "Break style",
      options: {
        list: [
          { title: "Solid", value: "solid" },
          { title: "Elipses", value: "elipses" },
        ],
      },
    },
  ],
};
