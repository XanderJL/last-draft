import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/styles.sass"

const Layout = ({ children }) => {
  return (
    <>
      <div className="site">
        <Navbar />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout