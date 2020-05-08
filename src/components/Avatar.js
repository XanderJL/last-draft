import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Avatar = props => {
  const avatarStyle = {
    marginLeft: "-25px",
    maxWidth: "150px",
    maxHeight: "150px",
    borderRadius: "50%",
    border: "5px solid #ffffff",
  }

  return (
    <>
      <Img fluid={props.fluid} style={avatarStyle} />
    </>
  )
}

Avatar.propTypes = {
  fluid: PropTypes.object.isRequired,
}

export default Avatar
