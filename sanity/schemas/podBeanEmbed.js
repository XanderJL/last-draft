import React from "react";
import Iframe from "react-iframe";

const Preview = ({ value }) => {
  const { url, title } = value;
  return (
    <Iframe
      url={url}
      title={title}
      width="100%"
      height="400"
      scrolling="no"
      style="border:none;"
    />
  );
};

export default {
  name: "podBeanEmbed",
  title: "Podbean Embed",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
