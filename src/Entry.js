import React from 'react'
import styled from 'styled-components/macro'

export default function Entry() {
  return (
    <EntryStyled>
      <HeaderStyled>
        <TitleStyled> Entry</TitleStyled>
        <DateStyled>01.08.2018</DateStyled>
      </HeaderStyled>

      <EntryBodyStyled>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </EntryBodyStyled>
    </EntryStyled>
  )
}

const EntryStyled = styled.div`   
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
`
const HeaderStyled = styled.div`
  font-weight: bold;
  background-color: #ec8647;
  padding: 20px;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
`

const TitleStyled = styled.span`
  text-align: left;
`

const DateStyled = styled.span`
  text-align: right;
`

const EntryBodyStyled = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`
