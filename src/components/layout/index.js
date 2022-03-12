import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "styles"
import { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import Footer from "components/footer"
import Header from "components/header"
import BreadCrumbs from "components/breadcrumbs"
import { isLoggedIn } from "auth/auth"
import LeftSideBar from "components/left"
import theme from "../../styles/theme"
// Global styles and component-specific styles.
import "./global.css"
import {
  main,
  mainWrapper,
  wrapper,
  siteContentWrapper,
  other__main__wrapper,
} from "./main.module.css"
import RightSideBar from "components/right"
const Layout = ({ location, tableOfContents, children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  /*object destructuration */
  const {
    site: {
      siteMetadata: { title },
    },
  } = data
  /*object destructuration with default value and possible undefined*/
  //const { breadcrumb = undefined } = pageContext || {}
  const { breadcrumb: { crumbs = undefined } = {} } = pageContext || {}

  const refContainer = useRef(undefined)

  //crossOriginIsolated
  return (
    <ThemeProvider theme={theme}>
      <div className={wrapper}>
        <GlobalStyles />
        <Helmet title="Simple Authentication With Gatsby" />
        {title && <Header siteTitle={title} />}
        <div className={mainWrapper}>
          {isLoggedIn() && !!crumbs && <BreadCrumbs crumbs={crumbs} />}
          <div className={other__main__wrapper}>
            <LeftSideBar />
            <main className={(main, siteContentWrapper)} ref={refContainer}>
              {children}
            </main>
            {isLoggedIn() && tableOfContents && (
              <RightSideBar
                location={location}
                tableOfContents={tableOfContents}
              />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Layout
