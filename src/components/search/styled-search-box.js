import styled from "styled-components"
import SearchBox from "./search-box"

export default styled(SearchBox)`
  display: inline-flex;
  flex: 1 1 300px;
  align-items: center;
  background-color: #fff;
  position: relative;
  border: 1px solid #CCC;
  border-radius: 16px;
  overflow: hidden;
  transition: border 150ms linear, color 150ms linear;
  &:focus-within {
    border: 1px solid rgb(38, 132, 255) !important;
    & > svg {
      color: #777;
      &:hover {
        color: black;
      }
    }
  }
  &:hover {
    border: 1px solid #777;
  }

  .SearchInput {
    border: 0;
    margin: 0;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: inherit;
    appearance: none;
    padding: 5px;
    flex: 1;
    background-color: ${p => p.theme.colors.background};
    color: inherit;
    outline: none;
    input:-webkit-autofill:first-line {
      color: white;
    }
    ::placeholder {
      color: #bbb;
      opacity: 1;
    }
  }

  .SearchIcon {
    margin-right: 5px;
    cursor: pointer;
    color: #bbb;
    transition: color 150ms linear;
    &:hover {
      color: #666;
      borderleft: 1px solid var #000 !important;
    }
    borderleft: 1px solid #bbb;
    borderradius: 0;
  }
`
