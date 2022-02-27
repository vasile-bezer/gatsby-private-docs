import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"

import {
  leftSidebarWrapper,
  leftSidebarNav,
} from "components/left/left.module.css"

const Left = () => {
  return (
    <aside className={leftSidebarWrapper}>
      <nav
        className={leftSidebarNav}
        role="navigation"
        aria-label="left-side-bar"
      >
        <Navigation />
      </nav>
    </aside>
  )
}

Left.propTypes = {
  navOpen: PropTypes.bool,
}

export default React.memo(Left)
