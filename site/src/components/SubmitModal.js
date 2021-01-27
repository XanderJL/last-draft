import React, { useState } from "react"
import {
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Textarea,
  useTheme,
} from "@chakra-ui/react"
import { AiOutlineUpload } from "react-icons/ai"
import { motion } from "framer-motion"

const BoxMotion = motion.custom(Box)

const ConvertKitModal = () => {
  const [isOpen, setOpen] = useState(true)
  const [fileName, setFileName] = useState("Select a File")
  const theme = useTheme()

  const controlStyles = {
    paddingBottom: "1rem",
  }

  const inputStyles = {
    borderRadius: 0,
    border: `1px solid`,
    borderColor: theme.colors.black,
    _hover: {
      borderColor: theme.colors.gray[500],
    },
  }

  const labelStyles = {
    fontFamily: theme.fonts.heading,
    fontWeight: "bold",
    textTransform: "uppercase",
  }

  return (
    <BoxMotion
      display={isOpen ? "flex" : "none"}
      flexDirection="column"
      zIndex={10000}
      minW={{ base: "100%", md: "600px" }}
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pb="0.5rem"
      >
        <Heading fontSize="2xl" textTransform="uppercase">
          Hello
        </Heading>
        <CloseButton size="lg" onClick={() => setOpen(!isOpen)} />
      </Box>
      <form
        method="POST"
        name="fa-form-1"
        action="https://webhook.frontapp.com/forms/ab612390d351b6438537/NvExwlfSwyETNInZkrd4kLGiLao2a8ahzc_JcbtEz5V1Rj3u7YMijxXJFQCVF_Egi6hlPJVSLrrOTkYZU8RS_qIkgrxwVzxT8bTvRWMzC5BorDm5Mrug60hi013e"
        encType="multipart/form-data"
        acceptCharset="utf-8"
      >
        <FormControl isRequired {...controlStyles}>
          <FormLabel htmlFor="name" {...labelStyles}>
            Name
          </FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Jane Doe"
            {...inputStyles}
          />
        </FormControl>
        <FormControl isRequired {...controlStyles}>
          <FormLabel htmlFor="email" {...labelStyles}>
            Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="jane.d@email.com"
            {...inputStyles}
          />
        </FormControl>
        <FormControl isRequired {...controlStyles}>
          <FormLabel htmlFor="body" {...labelStyles}>
            Message
          </FormLabel>
          <Textarea name="body" rows={6} placeholder="Hello" {...inputStyles} />
        </FormControl>
        <FormControl {...controlStyles}>
          <FormLabel
            display="flex"
            alignItems="center"
            w="max-content"
            p="0.5rem 1rem"
            cursor="pointer"
            {...labelStyles}
            {...inputStyles}
            _hover={{ bg: "gray.100" }}
          >
            <Icon as={AiOutlineUpload} boxSize={5} marginRight="0.35rem" />
            {fileName}
          </FormLabel>
          <Input
            type="file"
            name="attachment"
            w="0.1px"
            h="0.1px"
            opacity={0}
            overflow="hidden"
            position="absolute"
            zIndex="-1"
            onChange={e => {
              const [file] = e.target.files
              const { name: fileName, size } = file
              const fileSize = (size / 1000).toFixed(2)
              const fileNameAndSize = `${fileName} - ${fileSize}KB`
              setFileName(fileNameAndSize)
            }}
          />
        </FormControl>
        <FormControl {...controlStyles}>
          <Button
            type="submit"
            value="Send"
            variant="outline"
            w="max-content"
            {...inputStyles}
            fontFamily="heading"
            textTransform="uppercase"
            _hover={{ bg: "gray.100" }}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </BoxMotion>
  )
}

export default ConvertKitModal
