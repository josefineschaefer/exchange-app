import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <HeaderStyled> Mein Austauschjahr</HeaderStyled>
}

const HeaderStyled = styled.div`
  background-color: #ec8647;
  display: flex;
  font-weight: bold;
  font-size: 2em;
  justify-content: center;
  align-items: center;
`
