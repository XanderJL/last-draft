import React from "react"
import { Link } from "gatsby"
import Logo from "../images/icons/logo.png"
export default function Navbar() {
  function burgerMenu() {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector("#nav-menu")

    burger.classList.toggle("is-active")
    nav.classList.toggle("is-active")
  }

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo navbar-item">
              <img id="logo" src={Logo} alt="Last Draft Logo" />
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
