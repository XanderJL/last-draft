import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath, numberOfPages } = pageContext
  return (
    <>
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
        <ul className="pagination-list">
          {}
        </ul>
      </nav>
      {/* <pre>{JSON.stringify(pageContext, null, 2)}</pre> */}
    </>
  )
}

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Pagination
