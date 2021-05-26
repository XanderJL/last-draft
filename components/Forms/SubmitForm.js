import React, { useState } from "react"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Textarea,
  useTheme,
} from "@chakra-ui/react"
import { AiOutlineUpload } from "react-icons/ai"
import ReCAPTCHA from "react-google-recaptcha"

const SubmitForm = () => {
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
    <Flex
      maxW="65ch"
      m="0 auto"
      direction="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading as="h1" pb="1rem" fontSize="4xl" textTransform="uppercase">
        Submit your Story
      </Heading>
      <Box w="100%">
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
            <Textarea
              name="body"
              rows={6}
              placeholder="Hello"
              {...inputStyles}
            />
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
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA} />
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
      </Box>
    </Flex>
  )
}

export default SubmitForm
