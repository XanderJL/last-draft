import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

const SanityImage = ({ image, options, style }) => {
  const imageData = getGatsbyImageData(image, options, sanityConfig)

  return <GatsbyImage image={imageData} style={style} />
}

export default SanityImage
