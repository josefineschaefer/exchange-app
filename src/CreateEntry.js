import React, { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import { ImageAdd } from 'styled-icons/boxicons-regular/ImageAdd'
import PropTypes from 'prop-types'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CreateEntry.propTypes = {
  onSubmit: PropTypes.func
}

export default function CreateEntry({ onSubmit }) {
  const [pictures, setPictures] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    data.image = pictures
    data.date = formatDate(data.date)
    onSubmit(data)
    form.reset()
    form.title.focus()
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`
    const formData = new FormData()

    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })
      .then(response => {
        setPictures([...pictures, response.data.url])
      })
      .catch(err => {
        console.log(err)
        alert(err)
      })
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

  return (
    <FormStyled onSubmit={handleSubmit}>
      <>
        {pictures.map(pictureUrl => (
          <ImageStyled src={pictureUrl} alt="" />
        ))}
      </>
      <LabelStyled>
        Füge Bilder hinzu
        <ImageUploadStyled />
        <InputStyled name="image" type="file" onChange={upload} />
      </LabelStyled>
      <LabelStyled>
        Titel
        <input name="title" />
      </LabelStyled>
      <LabelStyled>
        Datum
        <input name="date" type="date" />
      </LabelStyled>
      <LabelStyled>
        Eintrag
        <textarea rows="10" cols="33" name="text" />
      </LabelStyled>
      <ButtonStyled>Eintrag erstellen</ButtonStyled>
    </FormStyled>
  )
}
const InputStyled = styled.input`
  display: none;
`

const ImageUploadStyled = styled(ImageAdd)`
  height: 20px;
  color: black;
  :hover {
    color: #ec8647;
  }
`

const ImageStyled = styled.img`
  width: 100%;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: scroll;
  margin-bottom: 20px;
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
