export default {
  name: "socials",
  title: "Social Media",
  type: "object",
  fieldsets: [
    {
      name: "socials",
    },
  ],
  fields: [
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      fieldset: "socials",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
      fieldset: "socials",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
      fieldset: "socials",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "url",
      fieldset: "socials",
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
};
