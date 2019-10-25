import React from 'react'
import { useAlert } from 'react-alert'
import styled from 'styled-components/macro'

export default function EntrySubmitBtn({ children }) {
  const alert = useAlert()

  return (
    <EntrySubmitBtnStyled
      onClick={() => {
        alert.show('Jippie, dein Eintrag wurde erstellt!')
      }}
    >
      Eintrag erstellen
    </EntrySubmitBtnStyled>
  )
}

const EntrySubmitBtnStyled = styled.button`
  border: none;
  padding: 20px;
  background-color: #5ed2a7;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  font-size: 1em;
  height: 60px;
`

