import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        {' '}
        Home
      </LinkStyled>
      <LinkStyled to="/create">Create</LinkStyled>
    </NavigationStyled>
  )
}

const LinkStyled = styled(NavLink)`
  flex-grow: 1;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4c3a4;

  &.active {
    background: #ec8647;
  }
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
  margin-top: 1px;
`
