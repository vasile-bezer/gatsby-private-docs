import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "styles"
import { Helmet } from "react-helmet"
import Footer from "components/footer"
import Header from "components/header"
import BreadCrumbs from "components/breadcrumbs"

// Global styles and component-specific styles.
import "./global.css"
import {
  main,
  siteWrapper,
  wrapper,
  siteContentWrapper,
} from "./main.module.css"
import RightSideBar from "components/toc"
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
  console.log(refContainer)
  //crossOriginIsolated
  console.log(tableOfContents)
  return (
    <div className={wrapper}>
      <GlobalStyles />
      <Helmet title="Simple Authentication With Gatsby" />
      {title && <Header siteTitle={title} />}
      {!!crumbs && <BreadCrumbs crumbs={crumbs} />}
      <div className={siteWrapper}>
        <main className={(main, siteContentWrapper)} ref={refContainer}>
          {children}
        </main>
        {tableOfContents && (
          <RightSideBar location={location} tableOfContents={tableOfContents} />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
