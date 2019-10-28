import React from 'react'
import styled from 'styled-components/macro'
import HomeIcon from '../icons/HomeIcon'
import CreateIcon from '../icons/CreateIcon'
import GalleryIcon from '../icons/GalleryIcon'
import MapIcon from '../icons/MapIcon'

export default function Navigation() {
  return (
    <NavigationStyled>
      <HomeIcon />
      <CreateIcon />
      <GalleryIcon />
      <MapIcon />
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 1px;
  margin-top: 1px;
`
