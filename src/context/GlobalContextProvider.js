import React, { useReducer } from "react"
import { ThemeProvider } from "styled-components"

import defaultTheme from "../styles/theme"
import GlobalStyle from "../styles/global"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()
const initialState = {
  collapsed: {},
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_NAV_COLLAPSED":
      return {
        ...state,
        collapsed: {
          ...state.collapsed,
          [action.url]: !state.collapsed[action.url] ? true : false,
        },
      }
    default:
      return {
        ...state,
      }
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
          {children}
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </ThemeProvider>
  )
}

export default GlobalContextProvider
