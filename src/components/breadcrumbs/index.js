import React from "react"
import PropTypes from "prop-types"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import { breadcrumbContainer } from "./breadcrumb.module.css" //:breadcrumb-container"

export default function BreadCrumbs({ crumbs }) {
  if (crumbs[0].pathname === "/" && crumbs.lenght !== 1) {
    crumbs.splice(0, 1)
  }
  return (
    <div className={breadcrumbContainer}>
      <Breadcrumb crumbs={crumbs} crumbSeparator="&rsaquo;" />
    </div>
  )
}

BreadCrumbs.propTypes = {
  crumbs: PropTypes.object.isRequired,
}
