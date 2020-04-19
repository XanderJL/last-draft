import React from "react"
import { Link } from "gatsby"

import Logo from "../images/last-draft-logo.png"

export default function Footer() {
  return (
    <React.Fragment>
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
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
        <div className="copyright has-text-centered">
          <span>&copy; Copyright 2020 by Lastdraft Inc.</span>
        </div>
      </footer>
    </React.Fragment>
  )
}
