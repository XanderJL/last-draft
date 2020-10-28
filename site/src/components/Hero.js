import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ children, fluid, styles, size }) => {
  return fluid ? (
    <BackgroundImage className={`hero is-${size}`} fluid={fluid} style={styles}>
      <div className="hero-body" style={{ minHeight: "200px" }}>
        <div className="container">{children}</div>
      </div>
    </BackgroundImage>
  ) : null
}

Hero.propTypes = {
  children: PropTypes.object,
  fluid: PropTypes.object,
}

export default Hero
