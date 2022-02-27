import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
import { ArrowCurveDownRight } from "@styled-icons/fluentui-system-filled/ArrowCurveDownRight"

const ButtonCollapse = ({ onClick, isCollapsed }) => {
  return (
    <StyledButtonCollapse
      onClick={onClick}
      aria-label="Toggle Subnavigation"
      title="Toggle Subnavigation"
    >
      {isCollapsed ? (
        <ArrowRight size={16} />
      ) : (
        <ArrowCurveDownRight size={16} />
      )}
    </StyledButtonCollapse>
  )
}

const StyledButtonCollapse = styled.button`
  /*right: 1.2rem;*/
  margin: 0;
  /*padding: 0.5rem 1.8rem 0.5rem 0rem;
  height: 37px;*/
  background: none;
  border: 0;
  cursor: pointer;
`

ButtonCollapse.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool,
}

export default ButtonCollapse
