import { Box } from "@chakra-ui/react"
import React from "react"

const Section = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      p={{ base: "2rem 1.25rem", md: "3rem 1.25rem" }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Section
