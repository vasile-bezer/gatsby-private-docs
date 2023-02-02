import React, {useState} from "react"
import styled from "styled-components"
import { connectSearchBox } from "react-instantsearch-dom"
import MagnifyingGlass from "./magnifying-glass"
import debounce from 'lodash.debounce';

const onChange = (refine, value) => {
  refine(value);
};

const debounced = debounce(onChange, 500);

const SearchBox = ({ refine, currentRefinement, className, onFocus }) => {
  const [state, setState] = useState({ value: currentRefinement });
  const onChangeDebounced = (event) => {
    setState({ value: event.currentTarget.value });
    debounced(refine, event.currentTarget.value);
  };

  return(
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Cerca"
        aria-label="Search"
        size="large"
        onChange={onChangeDebounced}
        value={state.value}
        onFocus={onFocus}
      />
      <StyledMagnifyingGlass className="SearchIcon" />
    </form>
  );
}
const StyledMagnifyingGlass = styled(MagnifyingGlass)`
  margin: 0px 0px 0px 0px;
  background: none;
  border: 0;
  cursor: pointer;
`


export default connectSearchBox(SearchBox)
