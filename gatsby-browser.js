/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//export { wrapRootElement } from './gatsby/wrapRootElement';
//export { wrapPageElement } from './gatsby/wrapPageElement';
import { navigate } from "@reach/router"

const React = require("react")
const GlobalContextProvider =
  require("./src/context/GlobalContextProvider").default

export const onPreRouteUpdate = ({ prevLocation, location }) => {
	console.log("Gatsby started to change location from", location.pathname)
	console.log("Gatsby started to change location to", prevLocation ? prevLocation.pathname : null)
}

export const shouldUpdateScroll = ({
	routerProps: {location},
	getSavedScrollPosition
})=>{
	if(location.action === "PUSH"){
		// window.setTimeout(() => window.scrollTo(0, 0), 0);
	} else {
		const savedPosition = getSavedScrollPosition(location);
		//  window.setTimeout(() => window.scrollTo(...(savedPosition || [0, 0])), 0);
	}
}
export const wrapRootElement = ({ element }) => (
	<GlobalContextProvider>{element}</GlobalContextProvider>
)
