import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { HomeAlt } from 'styled-icons/boxicons-regular'
import { Create } from 'styled-icons/material/Create'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        <StyledHome/>
      </LinkStyled>
      <LinkStyled to="/create">
        <StyledCreate />
      </LinkStyled>
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

const StyledHome = styled(HomeAlt)`
  height: 30px;
`
const StyledCreate = styled(Create)`
  height: 30px;
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
  margin-top: 1px;
`
