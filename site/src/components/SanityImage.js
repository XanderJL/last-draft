import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

const SanityImage = (props) => {
  const imageData = getGatsbyImageData(props.image, props.options, sanityConfig)

  return <GatsbyImage image={imageData} {...props} />
}

export default SanityImage
