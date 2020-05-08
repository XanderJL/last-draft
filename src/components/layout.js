import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"

import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <div className="site">
        <SEO title={props.title} description={props.description} />
        <Navbar />
        <main className="site-content">{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
