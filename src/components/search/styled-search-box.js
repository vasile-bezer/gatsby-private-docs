import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 10em;
  background: ${({ theme }) => theme.background};
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`

export default styled(SearchBox)`
  display: inline-flex;
  flex: 1 1 300px;
  align-items: center;
  background-color: #fff;
  position: relative;
  border: 1px solid ${p => p.theme.colors.borderColor};
  border-radius: 4px;
  overflow: hidden;
  &:focus-within {
    border: 1px solid rgb(38, 132, 255) !important;
    & > svg {
      color: #777;
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
    margin-right: 1px;
    cursor: pointer;
    color: #bbb;
    &:hover {
      color: #000 !important;
      borderleft: 1px solid var #000 !important;
    }
    borderleft: 1px solid #bbb;
    borderradius: 0;
  }
`
