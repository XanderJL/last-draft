import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"

const AuthorBio = ({ author }) => {
  const { slug, name, image, _rawBio } = author
  return (
    <div className=" author-bio">
      <Link
        to={`/the-last-draft/authors/${slug.current}`}
        className="avatar-link"
      >
        <Img
          className="avatar"
          fixed={image.asset.fixed}
          imgStyle={{ width: "100%", height: "auto" }}
        />
      </Link>
      <div className="content">
        <Link
          to={`/the-last-draft/authors/${slug.current}`}
          className="title is-montserrat is-uppercase is-size-5-mobile"
        >
          {name}
        </Link>
        <PortableText className="content" blocks={_rawBio} />
      </div>
    </div>
  )
}

AuthorBio.propTypes = {
  author: PropTypes.object.isRequired,
}

export default AuthorBio
