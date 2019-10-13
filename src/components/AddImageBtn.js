import React from 'react'
import styled from 'styled-components/macro'
import { ImageAdd } from 'styled-icons/boxicons-regular/ImageAdd'

export default function AddImageBtn(){
  return (
<ImageUploadStyled/>
  )
}

const ImageUploadStyled = styled(ImageAdd)`
  height: 30px;
  color: black;
  :hover {
    color: #ec8647;
  }
`