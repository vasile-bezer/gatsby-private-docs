import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  header,
  header__wrap,
  header__heading,
  header__nav,
  header__link,
  header__linkHome,
} from "./header.module.css"
import Status from "components/status"

const Header = ({ siteTitle }) => (
  <header className={header}>
    <div className={header__wrap}>
      <h1 className={header__heading}>
        <Link to="/" className={`${header__link} ${header__linkHome}`}>
          {siteTitle}
        </Link>
      </h1>
      <nav role="main" className={header__nav}>
        <Link to="/" className={header__link}>
          Home
        </Link>
        <Link to="/app/profile" className={header__link}>
          Profile
        </Link>
        <Link to="/app/details" className={header__link}>
          Details
        </Link>
      </nav>
    </div>
    <Status />
  </header>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
