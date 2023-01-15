import React, {useState} from "react"
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
      <MagnifyingGlass className="SearchIcon" />
    </form>
  );
}

export default connectSearchBox(SearchBox)
