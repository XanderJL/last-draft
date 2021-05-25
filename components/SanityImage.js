import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { getGatsbyImageData } from "gatsby-source-sanity"
import sanityConfig from "../lib/sanityConfig"

const SanityImage = ({ image, options, ...rest }) => {
  const imageData = getGatsbyImageData(image, options, sanityConfig)

  return <GatsbyImage image={imageData} {...rest} />
}

export default SanityImage
