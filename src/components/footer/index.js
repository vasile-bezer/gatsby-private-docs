import React from "react"
import { footer } from "components/footer/footer.module.css"

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        <p>
          ©{` `}
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
