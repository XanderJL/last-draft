import React from "react"
import Linkedin from "../images/icons/linkedin.svg"
import Instagram from "../images/icons/instagram.svg"
import Twitter from "../images/icons/twitter.svg"

export default function ContactForm() {
  return (
    <>
      <section id="contact" className="section-contact">
        <h1 className="title is-montserrat is-uppercase form-title has-text-black has-text-centered">
          connect with us
        </h1>
        <div className="icons">
          <a href="https://www.linkedin.com/company/last-draft/">
            <img src={Linkedin} alt="LinkedIn Icon" />
          </a>
          <a href="https://instagram.com/lastdraftinc">
            <img src={Instagram} alt="Instagram Icon" />
          </a>
          <a href="https://twitter.com/LastDraftInc">
            <img src={Twitter} alt="Twitter Icon" />
          </a>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="field">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="field">
            <input
              type="text"
              className="input"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="field">
            <textarea
              id=""
              cols="30"
              rows="10"
              className="textarea"
              name="message"
              placeholder="Message"
            />
          </div>
          <div className="field">
            <button
              type="submit"
              className="button is-montserrat is-uppercase is-black"
            >
              submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
