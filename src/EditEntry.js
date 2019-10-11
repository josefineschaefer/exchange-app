import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import MyDatePicker from './MyDatePicker'

EditEntry.propTypes = {
  onSubmit: PropTypes.func,
  editEntryData: PropTypes.object
}

export default function EditEntry({ onSubmit, editEntryData }) {
  function handleSubmit(event) {
    event.preventDefault()

    const newEditEntryData = {
      ...editEntryData,
      title,
      fullDate,
      text
    }
    onSubmit(editEntryData.id, newEditEntryData)
  }

  const newDate = new Date(editEntryData.fullDate)
  const [title, setTitle] = useState(editEntryData.title)
  const [fullDate, setFullDate] = useState(newDate)
  const [text, setText] = useState(editEntryData.text)

  console.log(fullDate)

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
        <MyDatePicker
          name="date"
          value={fullDate}
          date={fullDate}
          onChange={value => setFullDate(value)}
        ></MyDatePicker>
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
