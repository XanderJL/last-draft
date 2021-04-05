import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import SanityImage from "./SanityImage"

const AuthorBio = ({ author }) => {
  const { slug, name, image, bioRaw } = author
  return (
    <div className=" author-bio">
      <Link to={`/stories/authors/${slug.current}`} className="avatar-link">
        {image ? (
          <SanityImage
            className="avatar"
            image={image.asset}
            options={{ width: 150, height: 150 }}
            imgStyle={{ width: "100%", height: "auto" }}
          />
        ) : (
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
            enable-background="new 0 0 50 50"
          >
            <path
              fill="#000000"
              d="M32.017,26.947c3.152-2.093,5.237-5.672,5.237-9.731c0-6.439-5.238-11.677-11.677-11.677
	s-11.677,5.238-11.677,11.677c0,4.06,2.084,7.638,5.237,9.731c-7.133,2.632-12.243,9.479-12.243,17.516h3.114
	c0-8.585,6.984-15.57,15.57-15.57c8.585,0,15.57,6.984,15.57,15.57h3.114C44.26,36.426,39.15,29.579,32.017,26.947z M25.576,25.778
	c-4.722,0-8.563-3.841-8.563-8.563s3.842-8.563,8.563-8.563s8.563,3.841,8.563,8.563S30.298,25.778,25.576,25.778z"
            />
          </svg>
        )}
      </Link>
      <div className="content">
        <Link
          to={`/stories/authors/${slug.current}`}
          className="title is-montserrat is-uppercase is-size-5-mobile"
        >
          {name}
        </Link>
        <PortableText className="content" blocks={bioRaw} />
      </div>
    </div>
  )
}

AuthorBio.propTypes = {
  author: PropTypes.object.isRequired,
}

export default AuthorBio
