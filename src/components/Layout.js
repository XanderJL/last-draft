import * as React from "react"
import PropTypes from "prop-types"
import SEO from "./SEO"

import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box } from "@chakra-ui/react"

const Layout = ({ children, title, description, image }) => {
  return (
    <Box className="site">
      <SEO title={title} description={description} image={image} />
      <Navbar />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        className="site-content"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
}

export default Layout
