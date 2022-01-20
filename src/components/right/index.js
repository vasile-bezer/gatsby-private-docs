import styled from "styled-components"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ListItem from "./ListItems"

const RightSidebar = ({ tableOfContents, location }) => {
  const [listItems] = useState(() => {
    if (!!tableOfContents && !tableOfContents.items) {
      return []
    }
    const mappedLinks = []
    function mapLinks(items) {
      items.forEach(item => {
        if (item.title) {
          mappedLinks.push(item)
        }
        if (item.items) {
          mapLinks(item.items)
        }
      })
    }
    mapLinks(tableOfContents.items)
    return mappedLinks
  })

  return (
    <RightSidebarWrapper>
      <RightSidebarNav>
        <div style={{ position: "sticky", top: "0" }}>
          <RightSidebarTitle>Contenuti</RightSidebarTitle>
          <RightSidebarList>
            <div
              items={listItems.map(item => {
                return item.url.substring(1)
              })}
              currentClassName="is-current"
            >
              {listItems.map(item => (
                <li key={item.url}>
                  <ListItem location={location} item={item} />
                </li>
              ))}
            </div>
          </RightSidebarList>
        </div>
      </RightSidebarNav>
    </RightSidebarWrapper>
  )
}

const RightSidebarWrapper = styled.aside`
  /*display: table;*/
  /*flex: 0 0 16rem;
  font-size: 0.75rem;
  font-weight: 600;*/
  display: flex;
  position: relative;
  flex-direction: column;
  /*top: 0;
  bottom: 0;
  right: 0%;
  bottom: 0%;*/
  box-sizing: border-box;
  border-radius: 2px;
  float: right;
`

const RightSidebarNav = styled.nav`
  position: relative;
  display: block;
  /*overflow-x: hidden;
  overflow-y: auto;*/
  width: 16rem;
  flex: 1;
`

const RightSidebarTitle = styled.p`
  margin-top: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
`

const RightSidebarList = styled.ul`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

const RightSidebarListItem = styled.li`
  margin: 0.3rem 0;
`

RightSidebar.propTypes = {
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default RightSidebar
