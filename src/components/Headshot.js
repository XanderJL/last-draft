import React from "react"
import Img from "gatsby-image"
import HeadshotCard from "./HeadshotCard"

function Headshot(props) {
  return (
    <>
      <Img
        className="header-image"
        fluid={props.image}
        style={{ maxWidth: "1200px", maxHeight: "1200px" }}
      />
      <HeadshotCard
        quote={props.quote}
        employee={props.employee}
        title={props.title}
        url={props.url}
      />
    </>
  )
}

export default Headshot
