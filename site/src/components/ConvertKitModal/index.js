import React, { useState } from "react"
import { Box, CloseButton } from "@chakra-ui/core"
import { motion } from "framer-motion"
import Markup from "./dangerZone"

const BoxMotion = motion.custom(Box)

const ConvertKitModal = () => {
  const [isOpen, setOpen] = useState(true)
  return (
    <BoxMotion
      display={isOpen ? "flex" : "none"}
      flexDirection="column"
      zIndex={10000}
      minW={{ base: "max-content", md: "600px" }}
      maxH="80%"
      p="1.25rem"
      position="fixed"
      right={{ base: 0, md: "1rem" }}
      bottom={0}
      bg="white"
      initial={{
        y: 60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="card"
    >
      <Box display="flex" justifyContent="flex-end">
        <CloseButton size="lg" onClick={() => setOpen(!isOpen)} />
      </Box>
      <Box flex={1} dangerouslySetInnerHTML={Markup()} />
    </BoxMotion>
  )
}

export default ConvertKitModal
