import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostCard = ({ title, image, children, link, cardStyle }) => {
  return (
    <div className="card" style={cardStyle ? cardStyle : null}>
      <div className="card-image">
        {image ? (
          <Link to={link}>
            <Img
              className="post-image"
              fluid={image}
              imgStyle={{
                maxWidth: "100%",
                maxHeight: "240px",
              }}
              style={{
                maxWidth: "100%",
                maxHeight: "240px",
              }}
            />
          </Link>
        ) : null}
      </div>
      <div className="card-content">
        <Link to={link}>
          <h2 className="title-no-space is-size-5 is-montserrat has-text-black mb-2">
            {title}
          </h2>
        </Link>
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
  cardStyle: PropTypes.object,
}

export default PostCard
