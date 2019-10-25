import React from 'react'
import styled from 'styled-components/macro'
import { Image } from 'styled-icons/fa-solid/Image'


export default function ImageIcon() {
  return <ImageIconStyled />
}

const ImageIconStyled = styled(Image)`
  height: 48px;
  padding: 5px;
  color: var(--white);
  :hover {
    color: #5ed2a7;
  }
`