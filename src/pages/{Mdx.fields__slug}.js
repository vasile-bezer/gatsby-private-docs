import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx" /* never import MDXRenderer from @mdx-js */
import PropTypes from "prop-types"
import { Router } from "@reach/router"

import PrivateRoute from "../components/private-route"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MainTemplate = ({ data, location, pageContext }) => {
  const { mdx } = data
  const currentPath = location.pathname
  return (
    <Layout
      headings={mdx.headings}
      location={location}
      pageContext={pageContext}
    >
      <Seo title={mdx.fields.title} />
      <Router>
        <PrivateRoute
          path={location.pathname}
          component={MDXRenderer}
          body={mdx.body}
          currentPath={currentPath}
        />
      </Router>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      body
      headings {
        value
        depth
      }
      fields {
        title
        slug
      }
    }
  }
`

MainTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default MainTemplate
