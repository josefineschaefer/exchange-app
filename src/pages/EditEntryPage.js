import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import EntryDatePicker from '../components/EntryDatePicker'
import Label from '../components/Label'
import Button from '../components/Button'
import { Delete } from 'styled-icons/material/Delete'
import AddImageBtn from '../components/AddImageBtn'
import ImageUploadWrapper from '../components/ImageUploadWrapper'
import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

EditEntry.propTypes = {
  onSubmit: PropTypes.func,
  editEntryData: PropTypes.object
}

export default function EditEntry({ onSubmit, editEntryData }) {
  function handleSubmit(event) {
    event.preventDefault()

    const newEditEntryData = {
      ...editEntryData,
      tags,
      title,
      fullDate,
      text,
      image: pictures
    }
    onSubmit(editEntryData.id, newEditEntryData)
  }

  const newDate = new Date(editEntryData.fullDate)
  const [title, setTitle] = useState(editEntryData.title)
  const [fullDate, setFullDate] = useState(newDate)
  const [text, setText] = useState(editEntryData.text)
  const [tags, setTags] = useState(editEntryData.tags)
  const [pictures, setPictures] = useState(editEntryData.image)

  return (
    <FormStyled onSubmit={handleSubmit}>
      <ImageUploadWrapper>
        {pictures.map(pictureUrl => (
          <>
            <DeleteBtnStyled onClick={() => deleteImage(pictureUrl)} />
            <ImageStyled src={pictureUrl} alt="" />
          </>
        ))}
      </ImageUploadWrapper>
      <Label>
        Füge Bilder hinzu
        <AddImageBtn />
        <HiddenImageUploadStyled
          name="image"
          id="imageUpload"
          type="file"
          onChange={upload}
        />
      </Label>
      <Label>
        Titel
        <TitleInputStyled
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
      <div>
        Gastfamilie
        <CheckOptionsStyled
          type="checkbox"
          name="tag"
          value="Gastfamilie"
          checked={tags['Gastfamilie']}
          onClick={event => handleCheck(event)}
        ></CheckOptionsStyled>
        Schule
        <CheckOptionsStyled
          type="checkbox"
          name="tag"
          value="Schule"
          checked={tags['Schule']}
          onClick={event => handleCheck(event)}
        ></CheckOptionsStyled>
        Ausflug
        <CheckOptionsStyled
          type="checkbox"
          name="tag"
          value="Ausflug"
          checked={tags['Ausflug']}
          onClick={event => handleCheck(event)}
        ></CheckOptionsStyled>
      </div>
      <Label>
        Eintrag
        <EntryInputStyled
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
  function handleCheck(event) {
    console.log(event.target.value, !tags[event.target.value])
    const newTags = { ...tags, [event.target.value]: !tags[event.target.value] }
    setTags(newTags)
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
  function deleteImage(pictureUrl) {
    const filteredPictureList = pictures.filter(
      picture => picture !== pictureUrl
    )
    setPictures(filteredPictureList)
  }
}

const CheckOptionsStyled = styled.input`
  margin-right: 20px;
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  overflow-y: scroll;
`

const DeleteBtnStyled = styled(Delete)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 25px;
  color: white;
  cursor: pointer;
  z-index: 4;
  :hover {
    color: #3eb4be;
  }
`
const HiddenImageUploadStyled = styled.input`
  display: none;
`
const ImageStyled = styled.img`
  width: 100%;
`
const TitleInputStyled = styled.input`
  padding: 5px;
  font-size: 16px;
`
const EntryInputStyled = styled.textarea`
  padding: 5px;
`
