import * as React from "react"
import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import PropTypes from "prop-types"
import BlockContent from "@sanity/block-content-to-react"

function BioCard(props) {
  const { bio, socials } = props
  const serializers = {
    marks: {
      link: ({ children, mark }) =>
        mark.blank ? (
          <a href={mark.href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={mark.href}>{children}</a>
        ),
    },
  }

  return (
    <div className="card-copy">
      <div className="card-content">
        <div className="content">
          <BlockContent blocks={bio} serializers={serializers} />
        </div>
        {socials ? (
          <div className="social">
            {socials.linkedin ? (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon is-large" />
              </a>
            ) : null}
            {socials.twitter ? (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon is-large" />
              </a>
            ) : null}
            {socials.instagram ? (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon is-large" />
              </a>
            ) : null}
            {socials.facebook ? (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="icon is-large" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

BioCard.propTypes = {
  bio: PropTypes.array.isRequired,
}

export default BioCard
