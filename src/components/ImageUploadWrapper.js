import React from 'react'
import styled from 'styled-components/macro'

export default function ImageUploadWrapper({ children }) {
  return <StyledImageUploadWrapper>{children}</StyledImageUploadWrapper>
}

const StyledImageUploadWrapper = styled.div`
  position: relative;
`

