import React, { useState } from "react"
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Heading,
  Link,
  Icon,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  useDisclosure,
  useTheme,
  Button,
} from "@chakra-ui/react"
import { AiOutlineUpload } from "react-icons/ai"
import PortableText from "@sanity/block-content-to-react"
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { Serializers } from "../Serializers"
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = ({ title, body }) => {
  const [fileName, setFileName] = useState("Select a File")
  const { isOpen, onClose } = useDisclosure()
  const theme = useTheme()
  // useScript(
  //   "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
  // )
  // const onloadCallback = () => {
  //   grecaptcha.render("html_element", {
  //     sitekey: "6LeIvUsaAAAAAIuQ2u4l9h0jCypMB7ryfPJFydk1",
  //   })
  // }

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
    <Stack maxW="55ch" m="0 auto" p="3rem 0" spacing={2}>
      <Heading
        as="h1"
        textTransform="uppercase"
        textAlign="center"
        color="black"
      >
        {title}
      </Heading>
      <Stack
        direction="row"
        spacing={3}
        alignContent="center"
        justifyContent="center"
        color="black"
        mb="0.5rem"
      >
        <Link href="https://www.linkedin.com/company/last-draft/" isExternal>
          <Icon as={FaLinkedin} boxSize={10} />
        </Link>
        <Link href="https://instagram.com/lastdraftinc" isExternal>
          <Icon as={FaInstagram} boxSize={10} />
        </Link>
        <Link href="https://twitter.com/LastDraftInc" isExternal>
          <Icon as={FaTwitter} boxSize={10} />
        </Link>
      </Stack>
      {body && (
        <Flex color="black" mb="0.5rem" textAlign="center">
          <PortableText blocks={body} serializers={Serializers} />
        </Flex>
      )}
      <form
        method="POST"
        name="fa-form-1"
        action="https://webhook.frontapp.com/forms/ab612390d351b6438537/iOWP2L_et0vxLdhkj1sK5sm8yEKW4Ue520RIW2dlMKkZjLA7TIpTSLN9hD2pGU3Wtbd7rR2utQCAPFYUI29tTwNONsmUG3TLcjQM6VRgLVSrK0x9FZ1V4HGR2XIU"
        encType="multipart/form-data"
        acceptCharset="utf-8"
      >
        <FormControl {...controlStyles} isRequired>
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
        <FormControl {...controlStyles} isRequired>
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
        <FormControl {...controlStyles} isRequired>
          <FormLabel htmlFor="body" {...labelStyles}>
            Message
          </FormLabel>
          <Textarea
            name="body"
            placeholder="Hello"
            rows={10}
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
          <ReCAPTCHA sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA} />
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
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent p="2rem 0" borderRadius={0}>
              <ModalHeader>Thank You For Reaching Out!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>We will get in touch as soon as we can.</ModalBody>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </Stack>
  )
}

export default ContactForm
