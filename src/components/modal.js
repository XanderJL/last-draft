import React, { useState } from "react"

const Modal = props => {
  const [clicked, setClicked] = useState(false)
  const modalStyle = {
    maxWidth: "contain",
    maxHeight: "contain",
  }
  let clickState = clicked ? "modal" : "modal is-active"

  return (
    <>
      <div
        role="button"
        tabIndex={-1}
        className={clickState}
        onKeyDown={() => setClicked(!clicked)}
      >
        <div
          role="button"
          tabIndex={-1}
          className="modal-background"
          onClick={() => setClicked(!clicked)}
          onKeyDown={() => setClicked(!clicked)}
        ></div>
        <div className="modal-content">
          <div className="card" style={modalStyle}>
            <div className="card-content">
              <h1 className="title is-montserrat">{props.header}</h1>
              <p>{props.body}</p>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large"
          onClick={() => setClicked(!clicked)}
        ></button>
      </div>
    </>
  )
}

export default Modal
