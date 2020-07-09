import React, { useState } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import SearchPreview from "../components/SearchPreview"
import "instantsearch.css/themes/reset.css"
import { FiSearch } from "react-icons/fi"

const searchClient = algoliasearch(
  "SSGWPHHJ27",
  "8188ca4ff6fc59f32051cbb8456d106d"
)

const Search = () => {
  const [hits, setHits] = useState(false)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="Last Draft"
      onSearchStateChange={() => setHits(true)}
      submit={<FiSearch />}
    >
      <SearchBox
        className="poop"
        onReset={() => setHits(false)}
        onKeyDown={e => (e.currentTarget.value === "" ? setHits(false) : null)}
        translations={{
          placeholder: "Search for articles",
        }}
      />
      {hits ? <Hits hitComponent={SearchPreview} /> : null}
    </InstantSearch>
  )
}

export default Search
