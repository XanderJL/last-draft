import React from "react"
import { Link } from "gatsby"
import Logo from "../images/icons/logo.png"
import Search from "../components/Search"

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
        <div className="container is-widescreen">
          <div className="navbar-brand">
            <Link to="/" className="navbar-logo navbar-item">
              <img id="logo" src={Logo} alt="Last Draft Logo" />
              <span className="is-montserrat is-uppercase has-text-black">
                last draft
              </span>
            </Link>
            <div
              role="button"
              tabIndex="0"
              className="navbar-burger burger"
              onClick={burgerMenu}
              onKeyDown={burgerMenu}
              style={{
                border: "none",
                outline: "none",
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="nav-menu" className="navbar-menu">
            <div className="navbar-end">
              <Link
                to="/"
                className="navbar-item is-montserrat is-uppercase"
                activeClassName="is-active"
              >
                home
              </Link>
              <Link
                to="/about"
                className="navbar-item is-montserrat is-uppercase"
                activeClassName="is-active"
              >
                about
              </Link>
              <div className="navbar-item has-dropdown is-hoverable is-montserrat is-uppercase">
                <Link
                  to="/services"
                  className="navbar-item"
                  activeClassName="is-active"
                >
                  services
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/services/for-artists" className="navbar-item">
                    Artists
                  </Link>
                  <Link
                    to="/services/for-entrepreneurs"
                    className="navbar-item"
                  >
                    Entrepreneurs
                  </Link>
                </div>
              </div>
              <Link
                to="/team"
                className="navbar-item is-montserrat is-uppercase"
                activeClassName="is-active"
              >
                team
              </Link>
              <Link
                to="/stories"
                className="navbar-item is-montserrat is-uppercase"
                activeClassName="is-active"
              >
                stories
              </Link>
              <a
                href="/#contact"
                className="navbar-item is-montserrat is-uppercase"
              >
                <div className="button is-solid is-montserrat is-uppercase">
                  contact
                </div>
              </a>
              <div className="navbar-item">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
