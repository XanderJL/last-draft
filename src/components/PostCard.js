import React from "react"
import Img from "gatsby-image"

const PostCard = props => {
  const { title, fluid, children } = props
  return (
    <div className="card">
      <div className="card-image">{fluid ? <Img fluid={fluid} /> : null}</div>
      <div className="card-content">
        <h2 className="title is-size-2-desktop is-montserrat is-uppercase has-text-black">
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}

export default PostCard
