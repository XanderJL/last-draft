import * as React from "react"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"

function HeadshotCard(props) {
  return (
    <div className="card-quote">
      <div className="card-content">
        <div className="quote">
          <BlockContent blocks={props.quote}/>
        </div>
        <div className="author">
          <p>{props.name}</p>
          <p>{props.jobTitle}</p>
        </div>
      </div>
    </div>
  )
}

HeadshotCard.propTypes = {
  quote: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
}

export default HeadshotCard
