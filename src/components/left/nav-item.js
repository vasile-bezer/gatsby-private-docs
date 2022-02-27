import styled from "styled-components"
import { Link } from "gatsby"
import React, { useContext } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "context/GlobalContextProvider"
import ButtonCollapse from "../ButtonCollapse"
import newId from "../../../util/newid"

const NavItem = ({ item }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const pageUrl = item.uri
  const pageId = item.id
  const isCollapsed = state?.collapsed[pageUrl]
  const hasChildren = item.children && item.children.length > 0

  return (
    <StyledNavItem>
      <div style={{ display: "inline flex" }}>
        <NavItemLink to={"/" + pageUrl} activeClassName="is-active">
          {item.title}

          {hasChildren && (
            <ButtonCollapse
              activeClassName="is-active"
              onClick={event => {
                event.preventDefault()
                dispatch({ type: "TOGGLE_NAV_COLLAPSED", url: pageUrl })
              }}
              isCollapsed={!isCollapsed}
            />
          )}
        </NavItemLink>
      </div>
      {hasChildren && isCollapsed && (
        <NavItemChild>
          {item.children &&
            item.children.map(subItem => (
              <NavItem key={"/" + pageUrl + pageId + newId()} item={subItem} />
            ))}
        </NavItemChild>
      )}
    </StyledNavItem>
  )
}

const StyledNavItem = styled.li`
  margin: 0rem 0rem 0rem 0rem;
  position: relative;
  overflow: auto;
  display: block;
  padding: 0;
  width: 100%;
  list-style: none;
`

const NavItemLink = styled(Link)`
  display: inline-block;
  overflow-wrap: break-word;
  padding: 0.5rem 0.5rem 0.5rem 1.2rem;
  /*width: 90%;*/
  position: relative;
  font-weight: normal;
  text-decoration: none;

  /* &:focus,
  &.is-active {
    font-weight: bold;
  }*/
`

const NavItemChild = styled.ul`
  margin: 0rem 0 0rem 0.5rem;
  padding: 0;
  list-style: none;
`

export default React.memo(NavItem)

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
