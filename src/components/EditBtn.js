import React from 'react'
import styled from 'styled-components/macro'
import { Create } from 'styled-icons/material/Create'

export default function EditBtn() {
  return <EditIconStyled />
}

const EditIconStyled = styled(Create)`
  height: 16px;
  margin: 0 5px;
  color: black;
  :hover {
    color: #3eb4be;
  }
`
