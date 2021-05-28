import { Box } from "@chakra-ui/react"
import React from "react"

export const ElipsesHr = () => {
  return (
    <Box
      as="hr"
      mt="3rem"
      mb="4rem"
      letterSpacing={36}
      fontSize="2xl"
      border={0}
      _after={{
        color: "black",
        content: "'...'",
        display: "inline-block",
        position: "relative",
        top: -18,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
  )
}

export const SolidHr = () => {
  return <Box as="hr" mt="3rem" mb="4rem" borderColor="black" />
}
