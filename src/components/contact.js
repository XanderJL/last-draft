import React from "react"
import Modal from "./Modal"
import Linkedin from "../images/icons/linkedin.svg"
import Instagram from "../images/icons/instagram.svg"
import Twitter from "../images/icons/twitter.svg"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const initState = {
  name: "",
  email: "",
  message: "",
  formErrors: {
    name: "",
    email: "",
    message: "",
  },
  modalState: false,
}

const errorStyle = {
  backgroundColor: "#FFC3C3",
  color: "#FF0000",
  border: "1px solid #FF0000",
  margin: "15px 0",
  padding: "5px 10px",
}

const invertedStyle = {
  backgroundColor: "#000000",
  color: "#FFFFFF",
}

export default class ContactForm extends React.Component {
  state = initState

  validateForm = () => {
    let name = ""
    let email = ""
    let message = ""

    if (!this.state.name) {
      name = "Name cannot be left blank."
    }
    if (!this.state.email.includes("@")) {
      email = "Please enter a valid email address."
    }

    if (!this.state.message) {
      message = "Message cannot be blank."
    }

    if (name || email || message) {
      this.setState({
        formErrors: { name, email, message },
      })
      return false
    }

    return true
  }

  handleChange = e => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const isValid = this.validateForm()

    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state }),
      })
        .then(() => {
          this.setState({ modalState: true })
        })
        .catch(error => alert(error))
      this.setState(initState)
    }
  }

  render() {
    const { name, email, message } = this.state

    return (
      <>
        <section
          id="contact"
          className="section-contact"
          style={this.props.inverted ? invertedStyle : null}
        >
          <h1
            className={
              "title is-montserrat is-uppercase form-title has-text-centered" +
              (this.props.inverted ? " has-text-white" : " has-text-black")
            }
          >
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
          <form onSubmit={this.handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
              />
              {this.state.formErrors.name ? (
                <p style={errorStyle}>{this.state.formErrors.name}</p>
              ) : null}
            </div>
            <div className="field">
              <input
                type="text"
                className="input"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            {this.state.formErrors.email ? (
              <p style={errorStyle}>{this.state.formErrors.email}</p>
            ) : null}
            <div className="field">
              <textarea
                id=""
                cols="30"
                rows="10"
                className="textarea"
                name="message"
                placeholder="Message"
                value={message}
                onChange={this.handleChange}
              />
            </div>
            {this.state.formErrors.message ? (
              <p style={errorStyle}>{this.state.formErrors.message}</p>
            ) : null}
            <div className="field">
              <button
                type="submit"
                className="button is-montserrat is-uppercase"
                style={
                  this.props.inverted
                    ? { color: "#000000", backgroundColor: "#FFFFFF" }
                    : null
                }
              >
                submit
              </button>
            </div>
          </form>
          {this.state.modalState ? <Modal /> : null}
        </section>
      </>
    )
  }
}
