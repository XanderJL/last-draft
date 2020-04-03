import React from "react"

function HeadshotCard(props) {
  return (
    <div className="card-quote">
      <div className="card-content">
        <div className="quote">
          <p>{props.quote}</p>
        </div>
        <div className="author">
          <p>{props.employee}</p>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  )
}

export default HeadshotCard
