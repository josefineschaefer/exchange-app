import React from 'react'
import styled from 'styled-components/macro'
import { Create } from 'styled-icons/material/Create'

export default function EditBtn() {
  return <EditIconStyled />
}

const EditIconStyled = styled(Create)`
  height: 16px;
  margin: 0 5px;
  color: var(--black);
  :hover {
    color: var(--lightblue);
  }
`
