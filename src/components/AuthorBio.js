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
        {/* <h3 className="is-montserrat is-size-6">Written By</h3> */}
        <Link
          to={`/the-last-draft/authors/${slug.current}`}
          className="is-montserrat is-size-5"
        >
          {name}
        </Link>
        <PortableText blocks={_rawBio} />
      </div>
    </div>
  )
}

AuthorBio.propTypes = {
  author: PropTypes.object.isRequired,
}

export default AuthorBio
