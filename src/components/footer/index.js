import React from "react"
import { footer } from "components/footer/footer.module.css"

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        <p>
          no copyright{" "}
          <span style={{ textDecoration: "line-through" }}>&#169;</span>{" "}
          &#64;dowsky{` `}
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
        <p style={{ textAlign: "center" }}>
          &#123; tutti gli errori sono intenzionali &#125;
        </p>
      </div>
    </footer>
  )
}

export default Footer
