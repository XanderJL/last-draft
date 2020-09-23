import { MdHeadsetMic } from "react-icons/md";

export default {
  name: "service",
  title: "Services",
  type: "document",
  icon: MdHeadsetMic,
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
      name: "imageAlt",
      title: "Alt Text",
      description: "Important for accessibility and SEO.",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      media: "media",
      blocks: "body",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block) => block._type === "block"
      );
      const media = value.media || [];

      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No title",
        media: media ? media[0] : null,
      };
    },
  },
};
