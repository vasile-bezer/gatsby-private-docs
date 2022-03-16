/* eslint-disable */
import React from "react"
import { ThemeProvider } from "styled-components"

import defaultTheme from "../src/styles/theme"
import GlobalStyle from "../src/styles/global"

export default function wrapRootElementWithTheme({ element }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyle />
        {element}
      </>
    </ThemeProvider>
  )
}
