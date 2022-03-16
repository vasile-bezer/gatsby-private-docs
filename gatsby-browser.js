/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//export { wrapRootElement } from './gatsby/wrapRootElement';
//export { wrapPageElement } from './gatsby/wrapPageElement';

const React = require("react")
const GlobalContextProvider =
  require("./src/context/GlobalContextProvider").default
export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)
