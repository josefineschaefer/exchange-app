import React from 'react'
import styled from 'styled-components/macro'
import { GridVertical } from 'styled-icons/boxicons-regular/GridVertical'


export default function GridVerticalIcon() {
  return <GridVerticalStyled />
}

const GridVerticalStyled = styled(GridVertical)`
  height: 48px;
  padding: 5px;
  color: var(--white);
  :hover {
    color: #5ed2a7;
  }
`