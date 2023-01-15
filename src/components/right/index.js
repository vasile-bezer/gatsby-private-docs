import styled from "styled-components"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ListItem from "./ListItems"
import { stickyAside } from "components/right/toc.module.css"

const TableOfContents = ({ tableOfContents, location }) => {
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
    <TableOfContentsWrapper>
      <TableOfContentsNav>
        <div className={stickyAside}>
          <TableOfContentsList>
            <div
              items={listItems.map(item => {
                return item.url.substring(1)
              })}
            >
              {listItems.map(item => (
                <li style={{margin: "0px 8px 0px 8px"}} key={item.url}>
                  <ListItem location={location} item={item} />
                </li>
              ))}
            </div>
          </TableOfContentsList>
        </div>
      </TableOfContentsNav>
    </TableOfContentsWrapper>
  )
}

const TableOfContentsWrapper = styled.aside`
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

const TableOfContentsNav = styled.nav`
  margin-left: 10px;
  position: relative;
  display: block;
  /*overflow-x: hidden;
  overflow-y: auto;*/
  width: 16rem;
  flex: 1;
`

const TableOfContentsTitle = styled.p`
  margin-top: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
`

const TableOfContentsList = styled.ul`
  border-left: 1px solid #dadde1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 10px 10px 10px;
  list-style: none;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

TableOfContents.propTypes = {
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default TableOfContents
