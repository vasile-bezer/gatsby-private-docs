import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "context/GlobalContextProvider"
import newId from "../../../util/newid"
import { menu__caret } from "./left.module.css"
import StyledNavItem from "./styled-nav-item"
import StyledNavItemLink from "./styled-nav-item-link"
import StyledNavItemChild from "./styled-nav-item-child"

const NavItem = ({ item }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const pageUrl = item.uri;
  const pageId = item.id;
  const isCollapsed = state?.collapsed[pageUrl];
  const hasChildren = item.children && item.children instanceof Array && item.children.length > 0;
  return (
	<>
		<StyledNavItem>
			<div className={`${!isCollapsed ? "menu__list-item--collapsed" : ""}`} style={{ display: "flex" }}>
				<StyledNavItemLink to={"/" + pageUrl} activeClassName="is-active" aria-expanded="true">
				{item.title}
				</StyledNavItemLink>
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
			<StyledNavItemChild>
				{item.children &&
					item.children.map(subItem => (
							<NavItem key={"/" + pageUrl + pageId + newId()} item={subItem} />
						)
					)
				}
			</StyledNavItemChild>
		)}
	</>
  );
};

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
