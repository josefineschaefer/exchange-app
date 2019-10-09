import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

EditEntry.propTypes = {
  onSubmit: PropTypes.func,
  editEntryData:PropTypes.func
}

export default function EditEntry({ onSubmit, editEntryData }) {
  function handleSubmit(event) {
    event.preventDefault()

    const newEditEntryData = {
      title,
      date,
      text
    }
    editEntryData.date = formatDate(editEntryData.date)
    onSubmit(editEntryData.id, newEditEntryData)
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

  const [title, setTitle] = useState(editEntryData.title)
  const [date, setDate] = useState(editEntryData.date)
  const [text, setText] = useState(editEntryData.text)

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Titel
        <input
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </LabelStyled>
      <LabelStyled>
        Datum
        <input
          name="date"
          type="date"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </LabelStyled>
      <LabelStyled>
        Eintrag
        <textarea
          rows="10"
          cols="33"
          name="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </LabelStyled>
      <ButtonStyled>Änderungen speichern</ButtonStyled>
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
