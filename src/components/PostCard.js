import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = props => {
  const { title, image, children, link } = props
  return (
    <div className="card">
      <div className="card-image">
        {image ? (
          <Link to={link}>
            <Img className="post-image" fluid={image} />
          </Link>
        ) : null}
      </div>
      <div className="card-content">
        <h2 className="title is-size-3-desktop is-size-4-mobile is-montserrat is-uppercase has-text-black">
          {title}
        </h2>
        <div className="content">{children}</div>
        <Link to={link} className="button">
          Read More &rsaquo;
        </Link>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
}

export default PostCard
