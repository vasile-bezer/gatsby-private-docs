import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);

    /*colors*/
    --text: #0e1111;
    --background: #fff;
    --primary: #01447e;
    --secondary: #9f3030;
    --sidebar: #e9eff4;
    --borderColor: #bbbbbb;
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
    font-family: 'Avenir', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
    
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


  .breadcrumb__title {
    color: var(--theme-ui-colors-text);
    font-size: 1.5rem;
    text-decoration: none;
  }

  .breadcrumb {
    list-style: none;
    background-color: var(--sidebar);
    
  }

  .breadcrumb__list {
    padding: 0;
    text-align: center;
    padding: 0.3%;
  }

  .breadcrumb__list__item {
    margin-top: 0;
    height: 100%;
    width: inherit;
    display: inline;

    text-align: center;
    vertical-align: 0%;
  }

  .breadcrumb__link {
    font-size: 0.9rem;
    font-weight: normal;
    color: var(--theme-ui-colors-text);
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  nav .breadcrumb__link:hover {
    color: purple;
  }

  nav .breadcrumb__link__active {
    color: var(--theme-ui-colors-primary);
  }

  nav .breadcrumb__link__disabled {
    text-decoration: none;
    color: black;
  }

  nav .breadcrumb__separator {
    color: black;
    margin: 0 0.25em;
    vertical-align: 0%;
  }
`

export default GlobalStyles
