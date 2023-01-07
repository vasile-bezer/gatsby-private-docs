import styled from "styled-components"

export default styled.li`
	margin: 0rem 0rem 0rem 0rem;
	position: relative;
	overflow: hidden;
	padding: 0;
	width: 100%;
	list-style: none;
	flex-wrap: wrap;
	box-sizing: border-box;
	transition: background 200ms cubic-bezier(0.08,0.52,0.52,1);
	&:hover {
		background: rgba(0,0,0,.05);
	}
`;