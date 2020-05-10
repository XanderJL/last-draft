import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Avatar = props => {
  return (
    <>
      <Img fluid={props.fluid} className="avatar" />
    </>
  )
}

Avatar.propTypes = {
  fluid: PropTypes.object.isRequired,
}

export default Avatar
