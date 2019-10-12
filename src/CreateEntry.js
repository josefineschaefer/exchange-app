import React, { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import { ImageAdd } from 'styled-icons/boxicons-regular/ImageAdd'
import PropTypes from 'prop-types'
import EntryDatePicker from './components/EntryDatePicker'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CreateEntry.propTypes = {
  onSubmit: PropTypes.func
}

export default function CreateEntry({ onSubmit }) {
  const [pictures, setPictures] = useState([])
  const [date, setDate] = useState(Date.now())

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    let fullDate = new Date(date)
    let data = Object.fromEntries(formData)
    data = {
      ...data,
      fullDate,
      image: pictures,
    }
    onSubmit(data)
    form.reset()
    setPictures([])
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
        <InputStyled
          name="image"
          id="imageUpload"
          type="file"
          onChange={upload}
        />
      </LabelStyled>
      <LabelStyled>
        Titel
        <input name="title" />
      </LabelStyled>
      <LabelStyled>
        Datum
        <EntryDatePicker name="date" date={date} onChange={handleDateChange} />
      </LabelStyled>
      <LabelStyled>
        Eintrag
        <textarea rows="10" cols="33" name="text" />
      </LabelStyled>
      <ButtonStyled>Eintrag erstellen</ButtonStyled>
    </FormStyled>
  )
  function handleDateChange(value) {
    setDate(value)
  }
}
const InputStyled = styled.input`
  display: none;
`

const ImageUploadStyled = styled(ImageAdd)`
  height: 30px;
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
