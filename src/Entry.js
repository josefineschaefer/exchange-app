import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Entry({ title, date, text, image }) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }
  return (
    <EntryStyled onClick={toggleText}>
      <HeaderStyled>
        <TitleStyled>
          <i class="far fa-edit"></i>
          {title}
        </TitleStyled>
        <DateStyled>{date}</DateStyled>
      </HeaderStyled>
      {isTextVisible && (
        <EntryBodyStyled>
          <EntryImageStyled src={image} />
          {text}
        </EntryBodyStyled>
      )}
    </EntryStyled>
  )
}

const EntryStyled = styled.div`
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
  display: flex;
  flex-direction: column;
`
const HeaderStyled = styled.div`
  font-weight: bold;
  background-color: #ec8647;
  padding: 20px;
  border-radius: 5px 5px 5px 5px;
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

const EntryImageStyled = styled.img`
  width: 100%;
  border-radius: 0 0 5px 5px;
`
