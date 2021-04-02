import * as React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import HeadshotCard from "./HeadshotCard"

const Headshot = props => {
  return (
    <>
      <Img
        className="header-image"
        fluid={props.image}
        style={{ maxWidth: "1200px", maxHeight: "1200px" }}
      />
      <HeadshotCard
        quote={props.quote}
        name={props.name}
        jobTitle={props.jobTitle}
      />
    </>
  )
}

Headshot.propTypes = {
  image: PropTypes.object.isRequired,
  quote: PropTypes.array.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

export default Headshot
