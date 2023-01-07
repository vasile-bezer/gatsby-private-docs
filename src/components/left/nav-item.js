import styled from "styled-components"
import { Link } from "gatsby"
import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "context/GlobalContextProvider"
import newId from "../../../util/newid"
import { menu__caret } from "./left.module.css"

const NavItem = ({ item }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const pageUrl = item.uri;
  const pageId = item.id;
  const isCollapsed = state?.collapsed[pageUrl];
  const hasChildren = item.children && item.children.length > 0;
  return (
	<>
		<StyledNavItem>
			<div className={`${!isCollapsed ? "menu__list-item--collapsed" : ""}`} style={{ display: "flex" }}>
				<NavItemLink to={"/" + pageUrl} activeClassName="is-active" aria-expanded="true">
				{item.title}
				</NavItemLink>
				{hasChildren && (
					<button
						aria-label={`Toggle the collapsible sidebar category ${item.title}`}
						className={`menu__caret ${menu__caret}`}
						onClick={(event) => {
							event.preventDefault();
							event.stopPropagation();
							dispatch({ type: "TOGGLE_NAV_COLLAPSED", url: pageUrl });
							return undefined;
						}}
					/>
				)}
			</div>
		</StyledNavItem>
		{hasChildren && isCollapsed && (
			<NavItemChild>
				{item.children &&
				item.children.map(subItem => (
					<NavItem key={"/" + pageUrl + pageId + newId()} item={subItem} />
				))}
			</NavItemChild>
		)}
	</>
  );
};

const StyledNavItem = styled.li`
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

const NavItemLink = styled(Link)`
	display: inline-block;
	overflow-wrap: break-word;
	padding: 0.5rem 0.5rem 0.5rem 1.2rem;
	flex: 1;
	font-weight: 500;
	/*width: 90%;*/
	position: relative;
	text-decoration: none;
	border-radius: .25rem;
	/* &:focus,
	&.is-active {
		font-weight: bold;
	}*/
`;

const NavItemChild = styled.ul`
	margin: 0rem 0 0rem 0.5rem;
	padding: 0;
	list-style: none;
`;

export default (NavItem);

/*
	per cambiare il peso dei font figlio si può usare
	const NavItemChild = styled.ul`
	margin: 0.5rem 0 0.5rem 0.5rem;
	padding: 0;
	list-style: none;
	& > li > a {
		margin: 0rem 0rem 0.3rem 0rem;
		font-weight: normal;
	}
	`;
*/
