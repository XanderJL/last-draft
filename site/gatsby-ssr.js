import React from "react"
import { ThemeProvider } from "@chakra-ui/core"
import ChakraTheme from "./src/styles/ChakraTheme"

import "./src/styles/styles.sass"

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={ChakraTheme}>{element}</ThemeProvider>
)
