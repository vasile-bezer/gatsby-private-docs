import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListItem = ({ location, item }) => {
  return (
    <ListItemLink to={location.pathname + item.url}>{item.title}</ListItemLink>
  )
}

const ListItemLink = styled(Link)`
  display: inline-block;
  padding: 0.2rem 0;
  width: 100%;
  text-decoration: none;
  font-size: .8rem;
  ${p => console.log(p)}
  color: ${p => p.theme.colors.text}
  
  transition: color ${p => p.theme.transition};
  &:focus {
    color: ${p => p.theme.colors.text};
  }
  */ &.is-active {
    font-weight: bold;
    background:none!important;
  }
`

ListItem.propTypes = {
  location: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default ListItem
