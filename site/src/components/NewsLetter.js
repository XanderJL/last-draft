import React, { Component } from "react"
import axios from "axios"
import { Heading, Box, FormControl, Input } from "@chakra-ui/core"

import Modal from "./Modal"
import Hero from "./Hero"

export class NewsLetter extends Component {
  state = {
    first_name: "",
    email: "",
    setModal: false,
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
        <Hero
          className="hero-newsletter"
          fluid={this.props.image}
          // styles={{ backgroundAttachment: "fixed" }}
          size="fullheight"
        >
          <Box
            maxW="65ch"
            p={{ base: "3rem 1.5rem", md: "5rem 3rem" }}
            m="0 auto"
            bg="black"
            textAlign="center"
          >
            <form onSubmit={this.handleSubmit}>
              <Heading
                as="h1"
                fontWeight={400}
                mb="1.5rem"
                color="white"
                className="title is-montserrat is-uppercase"
              >
                Sign Up For Our Newsletter
              </Heading>
              <FormControl>
                <Input
                  type="text"
                  name="first_name"
                  bg="white"
                  borderRadius={0}
                  mb="12px"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  name="email"
                  bg="white"
                  borderRadius={0}
                  mb="12px"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl>
                <button
                  type="submit"
                  className="button is-white is-montserrat is-uppercase has-text-weight-bold"
                >
                  submit
                </button>
              </FormControl>
            </form>
          </Box>
        </Hero>
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
