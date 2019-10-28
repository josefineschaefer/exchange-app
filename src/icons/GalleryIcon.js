import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { PhotoAlbum } from 'styled-icons/boxicons-solid/PhotoAlbum'

export default function GalleryIcon() {
  return (
    <LinkStyled exact to="/gallery">
      <GalleryIconStyled />
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
const GalleryIconStyled = styled(PhotoAlbum)`
  height: 30px;
  ${LinkStyled}.active & {
    color: var(--white);
  }
`
