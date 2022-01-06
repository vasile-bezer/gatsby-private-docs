import React from "react"
import { GlobalStyles } from "styles"
import { Helmet } from "react-helmet"
import Footer from "components/footer"
import Header from "components/header"

// Global styles and component-specific styles.
import "./global.css"
import { main, wrapper } from "./main.module.css"

const Layout = ({ children }) => (
  <div className={wrapper}>
    <GlobalStyles />
    <Helmet title="Simple Authentication With Gatsby" />
    <Header />
    <main className={main}>{children}</main>
    <Footer />
  </div>
)

export default Layout
