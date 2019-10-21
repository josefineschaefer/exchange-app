import React from 'react'
import styled from 'styled-components/macro'

export default function Button({children}){
  return (
<ButtonStyled>{children}</ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  border: none;
  padding: 20px;
  background-image: linear-gradient(to left, #5ed2a7, #3eb4be);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  font-size: 1em;
  height: 60px;
`