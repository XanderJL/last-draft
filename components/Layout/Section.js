import { Box } from "@chakra-ui/react"
import React from "react"

const Section = ({ children, ...rest }) => {
  return (
    <Box
      as="section"
      p={{ base: "3rem 1.25rem", md: "5rem 1.25rem" }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Section
