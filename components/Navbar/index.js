import { useState } from "react"
import { Flex, Box, Container, Heading } from "@chakra-ui/react"
import NavbarLinks from "./NavbarLinks"
import routes from "@lib/routes.json"
import MenuButton from "./MenuButton"
import Link from "@components/Link"
import Logo from "@components/Logo"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Box boxShadow="md" bg="white">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "space-between", md: "center" }}
          minH="67px"
        >
          <Flex justify="space-between" align="center">
            <Link display="flex" alignItems="center" href="/">
              <Logo boxSize={12} />
              <Heading size="md" pl="0.5rem">
                LAST DRAFT
              </Heading>
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
