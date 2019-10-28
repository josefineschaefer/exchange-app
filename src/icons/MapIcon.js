import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { Map } from 'styled-icons/boxicons-solid/Map'

export default function MapIcon() {
  return (
  <LinkStyled to="/map">
  <MapStyled />
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
const MapStyled = styled(Map)`
  height: 30px;
  ${LinkStyled}.active & {
    color: var(--white);
  }
`