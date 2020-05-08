import React from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"
import LinkedIn from "../images/icons/linkedin.svg"
import Instagram from "../images/icons/instagram.svg"

function BioCard(props) {
  return (
    <div className="card copy">
      <div className="card-content">
        <div className="content">
          <BlockContent blocks={props.bio} />
        </div>
        {props.linkedin || props.instagram ? (
          <div className="social">
            {props.linkedin ? (
              <a
                href={props.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="icon" src={LinkedIn} alt="LinkedIn logo" />
              </a>
            ) : null}
            {props.instagram ? (
              <a
                href={props.instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="icon" src={Instagram} alt="Instagram logo" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

BioCard.propTypes = {
  bio: PropTypes.array.isRequired,
}

export default BioCard
