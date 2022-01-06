import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }
  html {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  :root {
    box-sizing: border-box;
  }
  body {
    height: 100%;
    margin: 0px; /* removes default style */
    box-sizing: border-box;
    overflow-y: scroll;
    scroll-behavior: smooth;
    letter-spacing: -0.0027777778rem;
  }

  .gatsby-resp-image-image {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }

  nav.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    background-color: var(--theme-ui-colors-sidebar);
  }

  .breadcrumb__title {
    color: var(--theme-ui-colors-text);
    font-size: 1.5rem;
    text-decoration: none;
  }

  nav .breadcrumb__list {
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  nav .breadcrumb__list__item {
    display: inline;
  }

  nav .breadcrumb__link {
    font-size: 0.8rem;
    font-weight: normal;
    color: var(--theme-ui-colors-text);
    text-decoration: none;
    padding: 8px;
    &:hover {
      text-decoration: none;
    }
  }

  nav .breadcrumb__link:hover {
    color: var(--theme-ui-colors-primary);
  }

  nav .breadcrumb__link__active {
    color: var(--theme-ui-colors-primary);
  }

  nav .breadcrumb__link__disabled {
    text-decoration: none;
    padding: 8px;
    color: black;
  }

  nav .breadcrumb__separator {
    color: black;
    font-size: 0.8rem;
    margin: 0 0.25em;
    padding: 2px 1px;
  }
`

export default GlobalStyles
