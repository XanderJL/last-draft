import React from "react"

export default class Modal extends React.Component {
  state = {
    clicked: false,
  }

  modalStyle = {
    maxWidth: "contain",
    maxHeight: "contain",
  }

  handleClick = () => {
    this.setState({ clicked: true })
  }

  handleKeyDown = e => {
    console.log(e.key)
    if (e.key === "Escape") {
      this.setState({ clicked: true })
    }
  }

  render() {
    let clickState = this.state.clicked ? "modal" : "modal is-active"
    return (
      <>
        <div className={clickState} onKeyDown={this.handleKeyDown}>
          <div className="modal-background" onClick={this.handleClick}></div>
          <div className="modal-content">
            <div className="card" style={this.modalStyle}>
              <div className="card-content">
                <h1 className="title is-montserrat">{this.props.header}</h1>
                <p>{this.props.body}</p>
              </div>
            </div>
          </div>
          <button
            className="modal-close is-large"
            onClick={this.handleClick}
          ></button>
        </div>
      </>
    )
  }
}
