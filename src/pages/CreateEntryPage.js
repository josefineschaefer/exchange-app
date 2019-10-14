import React, { useState } from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import PropTypes from 'prop-types'
import EntryDatePicker from '../components/EntryDatePicker'
import Button from '../components/Button'
import AddImageBtn from '../components/AddImageBtn'
import Label from '../components/Label'
import Tag from '../components/Tag'
// import ImageUpload from '../components/ImageUpload'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

CreateEntry.propTypes = {
  onSubmit: PropTypes.func
}

export default function CreateEntry({ onSubmit }) {
  const [pictures, setPictures] = useState([])
  const [date, setDate] = useState(Date.now())
  const [tags, setTags] = useState({
    Gastfamilie: false,
    Schule: false,
    Ausflug: false
  })

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
      tags
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
      <Label>
        Füge Bilder hinzu
        <AddImageBtn />
        <InputStyled
          name="image"
          id="imageUpload"
          type="file"
          onChange={upload}
        />
      </Label>
      <Label>
        Titel
        <input name="title" />
      </Label>
      <Label>
        Datum
        <EntryDatePicker name="date" date={date} onChange={handleDateChange} />
      </Label>
      <div>
        Gastfamilie
        <CheckOptionsStyled
          type="checkbox"
          name="tag"
          value="Gastfamilie"
          onClick={event => handleCheck(event)}
        ></CheckOptionsStyled>
        Schule
        <CheckOptionsStyled
          type="checkbox"
          name="tag"
          value="Schule"
          onClick={event => handleCheck(event)}
        ></CheckOptionsStyled>
        Ausflug
        <CheckOptionsStyled
          type="checkbox"
          name="tag"
          value="Ausflug"
          onClick={event => handleCheck(event)}
        ></CheckOptionsStyled>
      </div>
      <Label>
        Eintrag
        <textarea rows="10" cols="33" name="text" />
      </Label>
      <Button>Eintrag erstellen</Button>
    </FormStyled>
  )

  function handleDateChange(value) {
    setDate(value)
  }
  function handleCheck(event) {
    setTags({ ...tags, [event.target.value]: !tags[event.target.value] })
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: scroll;
  margin-bottom: 20px;
`

const InputStyled = styled.input`
  display: none;
`
const ImageStyled = styled.img`
  width: 100%;
`
const CheckOptionsStyled = styled.input`
  margin-right: 20px;
`