import React from "react"
import { useForm } from "react-hook-form"
import {
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Input,
  Link,
  Stack,
  Flex,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"
import { Serializers } from "./Serializers"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const re = /\S+@\S+\.S+/

const ContactForm = ({ title, body }) => {
  const { register, handleSubmit, errors, reset } = useForm()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = values => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => {
        onOpen()
        reset()
      })
      .catch(error => alert(error))
  }

  const validateName = value => (!value ? "Please enter your name" : true)
  const validateEmail = value =>
    !value || value.match(re) ? "Please enter a valid email address" : true
  const validateMessage = value =>
    !value
      ? "Please enter your name"
      : value.length <= 2
      ? "Please write a message longer than two characters"
      : true

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
        <Flex color="white" mb="0.5rem">
          <PortableText blocks={body} serializers={Serializers} />
        </Flex>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={errors.name}>
            <Input
              name="name"
              placeholder="name"
              _placeholder={{
                color: "gray.600",
              }}
              ref={register({ validate: validateName })}
              backgroundColor="white"
              borderRadius={0}
              borderColor="black"
              _hover={{
                borderColor: "gray.400",
              }}
            ></Input>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <Input
              name="email"
              placeholder="jane.doe@gmail.com"
              _placeholder={{
                color: "gray.600",
              }}
              ref={register({ validate: validateEmail })}
              backgroundColor="white"
              borderRadius={0}
              borderColor="black"
              _hover={{
                borderColor: "gray.400",
              }}
            ></Input>
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message}>
            <Textarea
              name="message"
              placeholder="Hello!"
              _placeholder={{
                color: "gray.600",
              }}
              ref={register({ validate: validateMessage })}
              backgroundColor="white"
              rows={8}
              borderRadius={0}
              _hover={{
                borderColor: "gray.400",
              }}
              borderColor="black"
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            flex="1 1 auto"
            w="max-content"
            type="submit"
            bgColor="white"
            color="black"
            _hover={{
              bg: "cyan.300",
              color: "white",
              border: "1px solid black",
            }}
            fontFamily="heading"
            textTransform="uppercase"
            borderRadius={0}
            border="1px solid black"
          >
            Submit
          </Button>
        </Stack>
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
