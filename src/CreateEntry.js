import React from 'react'
import styled from 'styled-components/macro'

export default function CreateEntry({ onSubmit}) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    onSubmit(data)
    form.reset()
    form.title.focus()
  }

  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAI',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OKT',
    'NOV',
    'DEZ'
  ]

  function formatDate(event) {
    const selectedDate = event.target.value
    const date = new Date(selectedDate)
    let formattedDate =
      date.getDate() + '. ' + months[date.getMonth()] + ' ' + date.getFullYear()
    console.log(formattedDate)
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelStyled>
        Titel
        <input name="title" />
      </LabelStyled>
      <LabelStyled>
        Datum
        <input name="date" type="date" onChange={formatDate} />
      </LabelStyled>
      <LabelStyled>
        Eintrag
        <textarea name="entry" />
      </LabelStyled>
      <ButtonStyled>Eintrag erstellen</ButtonStyled>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: grid;
  gap: 20px;
  padding: 20px;
`

const LabelStyled = styled.label`
  display: grid;
  gap: 10px;
`

const ButtonStyled = styled.button`
  border: none;
  border-radius: 3px;
  padding: 20px;
  background: #ec8647;
`
