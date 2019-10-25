import React from 'react'
import styled from 'styled-components/macro'
import { Delete } from 'styled-icons/material/Delete'

export default function DeleteBtn() {
  return <DeleteBtnStyled />
}

const DeleteBtnStyled = styled(Delete)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 25px;
  color: var(--white);
  cursor: pointer;
  z-index: 4;
  :hover {
    color: var(--lightblue);
  }
`