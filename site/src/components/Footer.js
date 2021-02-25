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
                to="/services"
                className="navbar-item is-montserrat is-uppercase"
              >
                Services
              </Link>
              <Link
                to="/team"
                className="navbar-item is-montserrat is-uppercase"
              >
                Team
              </Link>
              <Link
                to="/stories"
                className="navbar-item is-montserrat is-uppercase"
              >
                Stories
              </Link>
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
              &copy; Copyright {new Date().getFullYear()} by Last Draft Inc.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
