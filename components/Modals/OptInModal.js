import { useState } from "react"
import {
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import ReCAPTCHA from "react-google-recaptcha"

const BoxMotion = motion(Box)

const boxVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const OptInModal = () => {
  const [isOpen, setOpen] = useState(true)

  const controlStyles = {
    paddingBottom: "1rem",
  }

  const inputStyles = {
    bg: "white",
    borderRadius: 0,
    border: `1px solid`,
    borderColor: "black",
    _hover: {
      borderColor: "gray.500",
    },
  }

  const labelStyles = {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <BoxMotion
          display="flex"
          flexDirection="column"
          boxShadow="xl"
          zIndex={100}
          maxW="100vw"
          maxH="80vh"
          position="fixed"
          marginLeft={{ base: 0, md: "1.25rem" }}
          right={{ base: 0, md: "1rem" }}
          bottom={{ base: 0, md: "1rem" }}
          bg="white"
          overflowY={{ base: "scroll", md: "hidden" }}
          variant={boxVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Flex direction={{ base: "column", md: "row" }} minH="700px">
            <Box
              display={{ base: "none", md: "block" }}
              w="50%"
              minW="280px"
              overflow="hidden"
            >
              <Image
                src="./forms/opt-in-cover-photo-compressed.png"
                alt="opt-in photo"
              />
            </Box>
            <Box
              display={{ base: "block", md: "none" }}
              position="relative"
              w="100%"
              h="300px"
            >
              <CloseButton
                display={{ base: "block", md: "none" }}
                position="absolute"
                right="0"
                zIndex={10}
                color="white"
                size="lg"
                onClick={() => setOpen(!isOpen)}
              />
              <Image src="./forms/mobile-type-writer.jpg" alt="type writer" />
            </Box>
            <Box w={{ base: "100%", md: "50%" }} minW="280px" p="2rem 1.25rem">
              <Flex justifyContent="flex-end" pb="1rem">
                <Box pb="0.5em" mr="1rem">
                  <Heading as="h1">Telling Stories:</Heading>
                  <Heading as="h2" fontSize="2xl" color="gray.600">
                    20 writing prompts to spark authentic connection
                  </Heading>
                </Box>
                <CloseButton
                  display={{ base: "none", md: "block" }}
                  size="lg"
                  onClick={() => setOpen(!isOpen)}
                />
              </Flex>
              <Text pb="1em">
                Download for free below! Check your inbox soon (and junk, just
                in case) to start getting inspired.
              </Text>
              <form
                method="POST"
                name="fa-form-1"
                action="https://webhook.frontapp.com/forms/ab612390d351b6438537/qBauoqj9Zw0NAvaN92D8278vh5aH025JJq7mHOjhV-wdN8DQCIc8JSxPu7MkKaXhjvEbqdzDTVhpyK5TdPhTSvb8y1VzUH3LsE92NeCvBrU438FDgvImFT1Wj0yx"
                encType="multipart/form-data"
                acceptCharset="utf-8"
              >
                <FormControl {...controlStyles}>
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
                <FormControl {...controlStyles}>
                  <FormLabel htmlFor="email" {...labelStyles}>
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="j.doe@email.com"
                    {...inputStyles}
                  />
                </FormControl>
                <Box display="none">
                  <div>
                    <Textarea name="body" defaultValue="default" />
                  </div>
                  <div>
                    <input type="file" name="attachment" />
                  </div>
                  <div id="html_element"></div>
                </Box>
                <FormControl {...controlStyles}>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA}
                  />
                </FormControl>
                <FormControl {...controlStyles}>
                  <Button
                    type="submit"
                    value="Send"
                    w="max-content"
                    borderRadius="0"
                    fontFamily="heading"
                    textTransform="uppercase"
                    colorScheme="red"
                  >
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Box>
          </Flex>
        </BoxMotion>
      )}
    </AnimatePresence>
  )
}

export default OptInModal
