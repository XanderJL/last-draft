import { extendTheme } from "@chakra-ui/react"
import Link from "./components/Link"
import Heading from "./components/Heading"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "gray.900",
      },
    },
  },
  components: {
    Link,
    Heading
  },
  colors: {
    cyan: {
      50: "#e0f4ef",
      100: "#b3e4d6",
      200: "#82d4bc",
      300: "#4ec2a1",
      400: "#21b48e",
      500: "#03a57c",
      600: "#009770",
      700: "#008661",
      800: "#007653",
      900: "#005938",
    },
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Rubik, sans-serif",
  },
})

export default theme
