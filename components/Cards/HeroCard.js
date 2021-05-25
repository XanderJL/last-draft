import { Box } from "@chakra-ui/react"
import React from "react"

const HeroCard = ({ children, ...rest }) => {
  return (
    <Box
      maxW="70ch"
      bg="white"
      p={{ base: "3rem 1.25rem", md: "4rem 3rem" }}
      m="0 auto"
      borderRadius={2}
      boxShadow="lg"
      {...rest}
    >
      {children}
    </Box>
  )
}

export default HeroCard
