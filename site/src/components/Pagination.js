import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <nav className="pagination">
      {previousPagePath && (
        <Link to={previousPagePath} className="pagination-previous">
          Previous
        </Link>
      )}
      {nextPagePath && (
        <Link to={nextPagePath} className="pagination-next">
          Next
        </Link>
      )}
    </nav>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
