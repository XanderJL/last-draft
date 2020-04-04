import React, { Component } from "react"

export class NewsLetter extends Component {
  state = {
    email: "",
  }

  handleChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {}

  render() {
    const { email } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <h1 className="title is-montserrat has-text-white">
            Sign Up For Our Newsletter
          </h1>
        </div>
        <div className="field">
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={email}
            className="input"
            placeholder="Email"
          />
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-white is-montserrat is-uppercase">
              submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default NewsLetter
