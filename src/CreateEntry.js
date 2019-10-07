import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateEntry({ onSubmit, editCardData }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.date = formatDate(data.date)
    onSubmit(data)
    form.reset()
    form.title.focus()
  }

  const months = [
    'Jan',
    'Feb',
    'März',
    'Apr',
    'Mai',
    'Juni',
    'Juli',
    'Aug',
    'Sept',
    'Okt',
    'Nov',
    'Dez'
  ]

  function formatDate(date) {
    const newDate = new Date(date)
    const formattedDate =
      newDate.getDate() +
      '. ' +
      months[newDate.getMonth()] +
      ' ' +
      newDate.getFullYear()
    return formattedDate
  }

  const [title, setTitle] = useState(editCardData.title ? editCardData.title: '')

  function getEditTitle() {
    return (editCardData === undefined ? '' : editCardData.title)
  }

  function getEditDate() {
    return editCardData === undefined ? '' : editCardData.date
  }

  function getEditText() {
    return editCardData === undefined ? '' : editCardData.text
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Titel
        <input
          name="title"
          defaultValue={title || '0'}
          onChange={setTitle => getEditTitle()}
        />
      </LabelStyled>
      <LabelStyled>
        Datum
        <input name="date" type="date"/>
      </LabelStyled>
      <LabelStyled>
        Eintrag
        <textarea
          rows="10"
          cols="33"
          name="text"
        />
      </LabelStyled>
      <ButtonStyled>Eintrag erstellen</ButtonStyled>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

const LabelStyled = styled.label`
  font-weight: bold;
  display: grid;
  gap: 10px;
`

const ButtonStyled = styled.button`
  border: none;
  padding: 20px;
  background: #ec8647;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  font-size: 1em;
  height: 60px;
`
