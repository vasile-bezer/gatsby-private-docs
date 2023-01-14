import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Footer from "components/footer"
import Header from "components/header"
import BreadCrumbs from "components/breadcrumbs"
import { isLoggedIn } from "auth/auth"
import LeftSideBar from "components/left"
// Global styles and component-specific styles.
import "./global.css"
import {
  main,
  mainWrapper,
  wrapper,
  siteContentWrapper,
  flex__container,
} from "./main.module.css"
import TableOfContents from "components/right"
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
    <div className={wrapper}>
      <Helmet title="Simple Authentication With Gatsby" />
      {title && <Header siteTitle={title} />}
      <div className={mainWrapper}>
        <div title="this div wraps breadcrumbs away from main">{isLoggedIn() && <BreadCrumbs crumbs={crumbs || [{crumbLabel:"home"}]} />}</div>
        <div className={flex__container}>
          <LeftSideBar />
          <main className={(main, siteContentWrapper)} ref={refContainer}>
            {children}
          </main>
          {isLoggedIn() && tableOfContents && (
            <TableOfContents
              location={location}
              tableOfContents={tableOfContents}
            />
          )}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
