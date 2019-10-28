import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { HomeCircle } from 'styled-icons/boxicons-solid/HomeCircle'

export default function HomeBtn() {
  return (
  <LinkStyled exact to="/">
  <HomeStyled />
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

const HomeStyled = styled(HomeCircle)`
  height: 30px;
  color: var(--black);
  ${LinkStyled}.active & {
    color: var(--white);
  }
`