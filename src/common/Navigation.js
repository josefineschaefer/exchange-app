import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { HomeCircle } from 'styled-icons/boxicons-solid/HomeCircle'
import { EditAlt } from 'styled-icons/boxicons-solid/EditAlt'
import { PhotoAlbum } from 'styled-icons/boxicons-solid/PhotoAlbum'
import { Map } from 'styled-icons/boxicons-solid/Map'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        <HomeStyled />
      </LinkStyled>
      <LinkStyled to="/create">
        <CreateStyled />
      </LinkStyled>
      <LinkStyled to="/gallery">
        <GalleryStyled />
      </LinkStyled>
    <LinkStyled to="/map">
    <MapStyled />
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

const HomeStyled = styled(HomeCircle)`
  height: 30px;
`
const CreateStyled = styled(EditAlt)`
  height: 30px;
`

const GalleryStyled = styled(PhotoAlbum)`
  height: 30px;
`
const MapStyled = styled(Map)`
  height: 30px;
`

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
  margin-top: 1px;
`
