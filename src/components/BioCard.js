import React from "react"
import LinkedIn from "../images/icons/linkedin.svg"
import Instagram from "../images/icons/instagram.svg"

function BioCard(props) {
  return (
    <div className="card copy">
      <div className="card-content">
        {props.children}
        {props.linkedin || props.instagram ? (
          <div className="social">
            {props.linkedin ? (
              <a href={props.linkedin}>
                <img className="icon" src={LinkedIn} alt="LinkedIn logo" />
              </a>
            ) : null}
            {props.instagram ? (
              <a href={props.instagram}>
                <img className="icon" src={Instagram} alt="Instagram logo" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default BioCard
