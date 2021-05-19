import * as React from "react";
import { AiOutlineBorderVerticle } from "react-icons";

const H1Style = (props) => (
  <span style={{ fontFamily: "Montserrat", fontSize: "3rem" }}>
    {props.children}
  </span>
);

const H2Style = (props) => (
  <span style={{ fontFamily: "Montserrat", fontSize: "2.5rem" }}>
    {props.children}
  </span>
);

const H3Style = (props) => (
  <span style={{ fontFamily: "Montserrat", fontSize: "2rem" }}>
    {props.children}
  </span>
);

export default {
  name: "blockContent",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
              {
                name: "blank",
                title: "Open in New Tab",
                type: "boolean",
              },
            ],
          },
        ],
      },
      styles: [
        { title: "Normal", value: "normal" },
        {
          title: "H1",
          value: "h1",
          blockEditor: {
            render: H1Style,
          },
        },
        {
          title: "H2",
          value: "h2",
          blockEditor: {
            render: H2Style,
          },
        },
        {
          title: "H3",
          value: "h3",
          blockEditor: {
            render: H3Style,
          },
        },
        { title: "Quote", value: "blockquote" },
      ],
    },
    {
      type: "blockImage",
    },
    {
      type: "embed",
    },
    {
      type: "podBeanEmbed",
    },
    {
      type: "hr",
    },
  ],
};
