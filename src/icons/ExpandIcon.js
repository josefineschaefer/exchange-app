import React from 'react'
import styled from 'styled-components/macro'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'

export default function ExpandIcon() {
  return <ExpandIconStyled />
}

const ExpandIconStyled = styled(KeyboardArrowDown)`
  position: absolute;
  height: 30px;
  z-index: 5;
  right: 45%;
  color: var(--black);
  :hover {
    color: var(--lightblue);
  }
`