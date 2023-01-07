import React from "react"
import PropTypes from "prop-types"
import { view, title__class } from "./view.module.css"

const View = ({ title, children }) => (
  <section className={view}>
    <div className={title__class}>{title}</div>
    {children}
  </section>
)

View.propTypes = {
  title: PropTypes.string, //.isRequired,
}

export default View
