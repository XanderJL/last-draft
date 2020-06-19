import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ children, fluid }) => {
  return fluid ? (
    <BackgroundImage className="hero is-large" fluid={fluid}>
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </BackgroundImage>
  ) : (
    <div className="hero is-primary is-large">
      <div className="hero-body">
        <div className="container">{children}</div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  children: PropTypes.object,
  fluid: PropTypes.object,
}

export default Hero
