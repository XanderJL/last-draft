import { useState } from "react"
import { Flex, Box, Container, Text } from "@chakra-ui/react"
import NavbarLinks from "./NavbarLinks"
import routes from "@lib/routes.json"
import MenuButton from "./MenuButton"
import Link from "@components/Link"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Box boxShadow="md">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "space-between", md: "center" }}
          minH="67px"
        >
          <Flex justify="space-between" align="center">
            <Link href="/" p="1.25rem">
              <Box />
              <Text>LAST DRAFT</Text>
            </Link>
            <MenuButton
              display={{ base: "block", md: "none" }}
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
            />
          </Flex>
          <NavbarLinks
            direction={{ base: "column", md: "row" }}
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
            routes={routes}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
