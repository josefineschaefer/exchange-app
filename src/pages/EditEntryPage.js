import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import EntryDatePicker from '../components/EntryDatePicker'
import Label from '../components/Label'
import Button from '../components/Button'

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

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label>
        Titel
        <input
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </Label>
      <Label>
        Datum
        <EntryDatePicker
          name="date"
          value={fullDate}
          date={fullDate}
          onChange={value => setFullDate(value)}
        ></EntryDatePicker>
      </Label>
      <Label>
        Eintrag
        <textarea
          rows="10"
          cols="33"
          name="text"
          value={text}
          onChange={event => setText(event.target.value)}
        />
      </Label>
      <Button>Änderungen speichern</Button>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
