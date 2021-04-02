import * as React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"
import { Box, Link } from "@chakra-ui/react"

const PostCard = ({ title, image, children, link }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignSelf="stretch"
      maxW="420px"
      boxShadow="lg"
    >
      <Box className="card-image">
        {image ? (
          <Link as={GatsbyLink} to={link}>
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
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p=" 1.25rem 1.25rem 2rem 1.25rem"
      >
        <Box pb="2rem">
          <Link as={GatsbyLink} to={link}>
            <h2 className="title-no-space is-size-5 is-montserrat has-text-black mb-2">
              {title}
            </h2>
          </Link>
          <div className="content">{children}</div>
        </Box>
        <Link
          as={GatsbyLink}
          to={link}
          color="white"
          maxW="max-content"
          className="button"
        >
          Read More &rsaquo;
        </Link>
      </Box>
    </Box>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  cardStyle: PropTypes.object,
}

export default PostCard
