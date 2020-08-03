import React, { useState, useRef, useEffect } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, Hits, connectSearchBox } from "react-instantsearch-dom"
import { motion, AnimatePresence } from "framer-motion"
import SearchPreview from "../components/SearchPreview"
import "instantsearch.css/themes/reset.css"
import { FiSearch } from "react-icons/fi"

const searchClient = algoliasearch(
  "SSGWPHHJ27",
  "8188ca4ff6fc59f32051cbb8456d106d"
)

const CustomSearch = ({ currentRefinement, translations, refine, setHits }) => {
  const searchBoxRef = useRef(null)
  const [search, setSearch] = useState(false)
  useEffect(() => {
    if (search) {
      searchBoxRef.current.focus()
    }
  })

  return (
    <form role="search" action="" noValidate={true}>
      {search ? (
        <AnimatePresence>
          <motion.input
            role="search"
            type="search"
            ref={searchBoxRef}
            className="ais-SearchBox-input"
            value={currentRefinement}
            placeholder={translations.placeholder}
            onChange={e => refine(e.currentTarget.value)}
            onKeyDown={e => {
              if (e.key === "Escape") {
                setSearch(false)
              }
              if (e.currentTarget.value === "") {
                setHits(false)
              }
            }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
          />
        </AnimatePresence>
      ) : null}
      <button
        type="button"
        style={{
          border: "none",
          outline: "none",
          background: "transparent",
        }}
        onClick={e => {
          e.preventDefault()
          setSearch(!search)
        }}
        style={{
          cursor: "pointer",
          background: "transparent",
          outline: "none",
          border: "none",
        }}
      >
        <svg viewBox="0 0 40 40" className="ais-SearchBox-submitIcon">
          <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
        </svg>
      </button>
    </form>
  )
}

const CustomSearchBox = connectSearchBox(CustomSearch)

const Search = () => {
  const [hits, setHits] = useState(false)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="Last Draft"
      onSearchStateChange={() => setHits(true)}
      submit={<FiSearch />}
    >
      <CustomSearchBox
        onReset={() => setHits(false)}
        setHits={setHits}
        translations={{
          placeholder: "Search for an article",
        }}
      />
      {hits ? (
        <AnimatePresence>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 30, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "tween",
            }}
          >
            <Hits hitComponent={SearchPreview} />
          </motion.div>
        </AnimatePresence>
      ) : null}
    </InstantSearch>
  )
}

export default Search
