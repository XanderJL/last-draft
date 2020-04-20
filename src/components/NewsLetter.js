import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import axios from "axios"

import Modal from "../components/Modal"

export class NewsLetter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      email: "",
      setModal: false,
    }
  }

  handleChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value,
    })
  }

  handleModal = () => {
    this.setState({ setModal: !this.state.setModal })
  }

  handleSubmit = e => {
    axios.post("/.netlify/functions/subscribe", {
      first_name: this.state.first_name,
      email: this.state.email,
    })

    this.setState({ first_name: "", email: "", setModal: !this.state.setModal })

    e.preventDefault()
  }

  render() {
    return (
      <>
        <BackgroundImage
          className="hero-newsletter is-fullheight"
          fluid={this.props.image}
          style={{ backgroundAttachment: "fixed" }}
        >
          <Img
            fluid={this.props.image}
            className="is-hidden-tablet"
            objectFit="contain"
            alt="Image of a typewriter"
          />
          <div className="hero-body">
            <div className="container">
              <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <h1 className="title is-montserrat has-text-white">
                      Sign Up For Our Newsletter
                    </h1>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="first_name"
                      value={this.state.first_name}
                      onChange={this.handleChange}
                      className="input"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="input"
                      placeholder="Email"
                    />
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        type="submit"
                        className="button is-white is-montserrat is-uppercase has-text-weight-bold"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </BackgroundImage>
        {this.state.setModal ? (
          <Modal
            header="Thank You!"
            body="Please check your inbox to confirm your email address."
            action={this.handleModal}
          />
        ) : null}
      </>
    )
  }
}

export default NewsLetter
