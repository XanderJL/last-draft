import React from "react"
import InstagramEmbed from "react-instagram-embed"
import { Tweet } from "react-twitter-widgets"
import ReactPlayer from "react-player"
import urlBuilder from "@sanity/image-url"
import PortableText from "@sanity/block-content-to-react"

const Serializers = {
  types: {
    hr: ({ node }) => {
      if (node.style === "elipses") {
        return <hr className="elipses-hr" />
      } else if (node.style === "solid") {
        return <hr className="solid-hr" style={{ margin: "3rem auto" }} />
      }
    },
    blockImage: ({ node }) => {
      const { image, alt, caption } = node
      return (
        <div style={embedStyle}>
          <img
            className="image"
            src={urlFor(image)}
            alt={alt}
            style={{ margin: "1rem auto" }}
          />
          <div className="content has-text-grey is-italic">
            {caption ? (
              <PortableText blocks={caption} />
            ) : (
              <span>{alt}</span>
            )}
          </div>
        </div>
      )
    },
    embed: ({ node }) => {
      const { url } = node

      // Instagram embeds
      if (rx("instagram").test(url)) {
        return (
          <div style={embedStyle}>
            <InstagramEmbed url={url} hideCaption={true} />
          </div>
        )
      }

      // Youtube embeds
      if (rx("youtube").test(url)) {
        return (
          <ReactPlayer
            url={url}
            controls={true}
            width={"100%"}
            style={embedStyle}
          />
        )
      }

      // Twitter embeds
      if (rx("twitter").test(url)) {
        return (
          <div style={embedStyle}>
            <Tweet url={url} />
          </div>
        )
      }

      return <span>Missing url</span>
    },
  },
}

const embedStyle = {
  margin: "3.5rem auto",
}

// URL builder for images
const urlFor = src =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_ID,
    dataset: process.env.GATSBY_SANITY_DATASET,
  }).image(src)

const rx = str => {
  const regex = new RegExp(
    `^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?${str}`,
    "ig"
  )
  return regex
}

export default Serializers
