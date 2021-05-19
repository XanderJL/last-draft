import * as React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ value }) => {
  const { url } = value;
  return <ReactPlayer url={url} controls width="100%" />
};

export default {
  name: "video",
  title: "Video",
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
    component: VideoPlayer,
  },
};
