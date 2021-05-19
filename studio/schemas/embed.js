import * as React from "react";
import Embed from "react-embed";

const EmbedUrl = ({ value }) => {
  const { url } = value;
  return <Embed url={url} />;
};

export default {
  name: "embed",
  title: "Embed",
  type: "object",
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
  preview: {
    select: { url: "url" },
    component: EmbedUrl,
  },
};
