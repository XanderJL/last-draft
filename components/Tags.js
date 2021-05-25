import * as React from "react"
import PropTypes from "prop-types"

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map(tag => {
        return <span key={tag} className="tag is-primary is-light is-small">{tag}</span>
      })}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default Tags
