import React from "react"
import { Link } from "gatsby"

import Logo from "../images/last-draft-logo.png"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <Link to="/" className="logo">
              <img src={Logo} alt="Last Draft logo" />
            </Link>
            <div className="links">
              <Link
                to="/about"
                className="navbar-item is-montserrat is-uppercase"
              >
                About
              </Link>
              <Link
                to="/team"
                className="navbar-item is-montserrat is-uppercase"
              >
                Team
              </Link>
              <a
                href="https://medium.com/lastdraft"
                className="navbar-item is-montserrat is-uppercase"
                target="_blank"
                rel="noreferrer noopener"
              >
                Stories
              </a>
              <a
                href="mailto: jacob@lastdraft.ca"
                className="navbar-item is-montserrat is-uppercase"
                target="_blank"
                rel="noreferrer noopener"
              >
                Email Us
              </a>
            </div>
            <span className="copyright">
              &copy; Copyright 2020 by Lastdraft Inc.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
