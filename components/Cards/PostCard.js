import * as React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link } from "@chakra-ui/react"
import SanityImage from "../SanityImage"

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
            <SanityImage
              className="post-image"
              image={image}
              options={{ maxWidth: 800, maxHeight: 600 }}
              imgStyle={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "240px",
              }}
              style={{
                width: "100%",
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
