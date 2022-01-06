import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

export default function BreadCrumbs({ crumbs }) {
  if (crumbs[0].pathname === "/" && crumbs.lenght !== 1) {
    crumbs.splice(0, 1)
  }
  return (
    <BreadCrumbContainer>
      <Breadcrumb crumbs={crumbs} crumbSeparator="›" />
    </BreadCrumbContainer>
  )
}

const BreadCrumbContainer = styled.div`
  margin-top: 70px;
`
BreadCrumbs.propTypes = {
  crumbs: PropTypes.object.isRequired,
}
