import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "context/GlobalContextProvider"
import { menu__caret } from "./left.module.css"
import StyledNavItem from "./styled-nav-item"
import StyledNavItemLink from "./styled-nav-item-link"
import StyledNavItemChild from "./styled-nav-item-child"

const NavItem = ({ item }) => {
	const state = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalDispatchContext);
	const pageUrl = item.uri;
	const isCollapsed = state?.collapsed[pageUrl];
	const hasChildren = item.children && item.children instanceof Array && item.children.length > 0;

	return (
		<>
			<StyledNavItem>
				<div className={`${!isCollapsed ? "menu__list-item--collapsed" : ""}`} style={{ display: "flex" }}>
					<StyledNavItemLink to={"/" + pageUrl} activeclassname="is-active" aria-expanded="true">
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
						item.children.map(
							function(child, index){
								return (
									/** https://stackoverflow.com/questions/60164740/how-to-apply-css-animation-for-react-array-map-iterations */
									<NavItem key={index} item={child} />
								)
							}
						)
					}
				</StyledNavItemChild>
			)}
		</>
	);
};

export default (NavItem);