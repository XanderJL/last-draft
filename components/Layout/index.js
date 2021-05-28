import { Box, Flex } from "@chakra-ui/layout"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, ...rest }) => {
  return (
    <Flex direction="column" minH="100vh" w="100%" overflow="hidden" {...rest}>
      <Navbar />
      <Box flex={1}>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout
