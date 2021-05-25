import * as React from "react"
import PropTypes from "prop-types"
import HeadshotCard from "./HeadshotCard"
import SanityImage from "./SanityImage"

const Headshot = ({ image, quote, name, jobTitle }) => {
  return (
    <>
      <SanityImage
        className="header-image"
        image={image}
        options={{ maxWidth: 1200, maxHeight: 1200 }}
      />
      <HeadshotCard quote={quote} name={name} jobTitle={jobTitle} />
    </>
  )
}

Headshot.propTypes = {
  image: PropTypes.object.isRequired,
  quote: PropTypes.array.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

export default Headshot
