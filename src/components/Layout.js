import React from "react"
import PropTypes from "prop-types"
import SEO from "./SEO"


import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, title, description, image }) => {
  return (
    <>
      <div className="site">
        <SEO title={title} description={description} image={image} />
        <Navbar />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
}

export default Layout
