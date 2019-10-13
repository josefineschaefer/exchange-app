import React from 'react'
import styled from 'styled-components/macro'

export default function Label({children}) {
  return (
  <LabelStyled>{children}</LabelStyled>
  )
}

const LabelStyled = styled.label`
  font-weight: bold;
  display: grid;
  gap: 10px;
`
