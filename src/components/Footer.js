import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Image, Link, Text } from "@chakra-ui/react"

import Logo from "../images/icons/logo.png"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <Link
              as={GatsbyLink}
              display="flex"
              alignItems="center"
              to="/"
              pb="1rem"
            >
              <Image boxSize={12} src={Logo} alt="Last Draft logo" />{" "}
              <Text
                pl="1rem"
                fontFamily="heading"
                fontWeight={600}
                fontSize="xl"
                textTransform="uppercase"
              >
                Last Draft
              </Text>
            </Link>
            <div className="links">
              <Link
                as={GatsbyLink}
                to="/about"
                className="navbar-item is-montserrat is-uppercase"
              >
                About
              </Link>
              <Link
                as={GatsbyLink}
                to="/services/for-business"
                className="navbar-item is-montserrat is-uppercase"
              >
                Services
              </Link>
              <Link
                as={GatsbyLink}
                to="/team"
                className="navbar-item is-montserrat is-uppercase"
              >
                Team
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
              &copy; Copyright {new Date().getFullYear()} by Last Draft
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
