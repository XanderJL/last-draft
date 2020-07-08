import React from "react"
import { Link } from "gatsby"
import toPlainText from "../hooks/toPlainText"
import { Highlight } from "react-instantsearch-dom"

const SearchPreview = ({ hit }) => {
  return (
    <Link
      to={`/the-last-draft/${hit.category.slug.current}/${hit.slug.current}`}
      className="search-hit"
    >
      <h2 className="is-montserrat is-uppercase is-size-5">
        <Highlight hit={hit} attribute="title" tagName="mark" />
      </h2>
      <h3 className="is-montserrat is-uppercase has-text-grey is-size-6">
        <Highlight attribute="category.title" hit={hit} tagName="mark" />
      </h3>
      <h3 className="is-montserrat has-text-grey is-size-6">
        <Highlight attribute="author.name" hit={hit} tagName="mark" />
      </h3>
      <p>
        <Highlight
          attribute={toPlainText(hit._rawBody).slice(0, 159) + "..."}
          hit={hit}
        />
      </p>
      <hr style={{ margin: "1rem 0 0 0" }} />
    </Link>
  )
}

export default SearchPreview
