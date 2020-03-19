import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Logo from "../images/icons/logo.png"
export default function Navbar() {
  function burgerMenu() {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector("#nav-menu")

    burger.classList.toggle("is-active")
    nav.classList.toggle("is-active")
  }

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "icons/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const logo = data.logo.childImageSharp.fluid

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo navbar-item">
              {/* <img id="logo" src={Logo} alt="Last Draft Logo" /> */}
              <Img id="logo" fluid={logo} alt="Last Draft logo" objectFit="contain"/>
              <span className="is-montserrat is-uppercase has-text-black">
                last draft
              </span>
            </Link>
            <div
              className="navbar-burger burger"
              onClick={burgerMenu}
              data-target="nav-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="nav-menu" className="navbar-menu">
            <div className="navbar-end">
              <Link
                to="/about"
                className="navbar-item is-montserrat is-uppercase"
                activeClassName="is-active"
              >
                about
              </Link>
              <a
                href="#contact"
                className="navbar-item is-montserrat is-uppercase"
              >
                <div className="button is-solid is-black is-montserrat is-uppercase">
                  contact
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
