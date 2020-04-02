import React from "react"
import LinkedIn from "../images/icons/linkedin.svg"

function HeadshotCard(props) {
  return (
    <div className="card-quote">
      <div className="card-content">
        <div className="quote">
          <p>{props.quote}</p>
        </div>
        <div className="media">
          {props.url ? (
            <a href={props.url}>
              <img src={LinkedIn} alt="LinkedIn logo" />
            </a>
          ) : null}
          <div className="author">
            <p>{props.employee}</p>
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadshotCard
