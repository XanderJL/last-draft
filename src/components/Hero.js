import * as React from "react"
import PropTypes from "prop-types"
import { BgImage } from "gbimage-bridge"
import { Box, Container } from "@chakra-ui/react"

const Hero = ({ children, image, styles, size }) => {
  return image ? (
    <BgImage className={`hero is-${size}`} image={image} style={styles}>
      <Box minH="200px" className="hero-body">
        <Container maxW="container.xl">{children}</Container>
      </Box>
    </BgImage>
  ) : null
}

Hero.propTypes = {
  children: PropTypes.object,
  image: PropTypes.object,
}

export default Hero
