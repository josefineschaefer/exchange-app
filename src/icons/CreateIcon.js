import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { EditAlt } from 'styled-icons/boxicons-solid/EditAlt'

export default function CreateBtn() {
  return (
    <LinkStyled to="/create">
      <CreateStyled />
    </LinkStyled>
  )
}

const LinkStyled = styled(NavLink)`
  flex-grow: 1;
  color: var(--black);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--turquoise);
`
const CreateStyled = styled(EditAlt)`
  height: 30px;
  ${LinkStyled}.active & {
    color: var(--white);
  }
`
