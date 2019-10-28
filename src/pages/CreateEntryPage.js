import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import EntryDatePicker from '../components/EntryDatePicker'
import AddImageBtn from '../icons/AddImageBtn'
import Label from '../components/Label'
import ImageUploadWrapper from '../components/ImageUploadWrapper'
import EntrySubmitBtn from '../components/EntrySubmitBtn'
import InputEditor from '../components/InputEditor'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import { uploadImage } from '../services'
import { Delete } from 'styled-icons/material/Delete'

CreateEntry.propTypes = {
  onSubmit: PropTypes.func,
  editEntryData: PropTypes.object
}

export default function CreateEntry({ onSubmit, editEntryData = {} }) {
  const newDate = editEntryData.fullDate
    ? new Date(editEntryData.fullDate)
    : null

  const [isCreated, setIsCreated] = useState(false)
  const [title, setTitle] = useState(
    editEntryData.title ? editEntryData.title : ''
  )
  const [pictures, setPictures] = useState(
    editEntryData.image ? editEntryData.image : []
  )
  const [date, setDate] = useState(newDate ? newDate : Date.now())
  const [tags, setTags] = useState(
    editEntryData.tags
      ? editEntryData.tags
      : {
          Gastfamilie: false,
          Schule: false,
          Ausflug: false
        }
  )
  const [editorContent, setEditorContent] = useState(
    editEntryData.editorContent &&
      EditorState.createWithContent(getContentState())
      ? EditorState.createWithContent(getContentState())
      : EditorState.createEmpty()
  )

  return isCreated ? (
    <Redirect to="/" />
  ) : (
    <FormStyled onSubmit={handleSubmit}>
      <ImageUploadWrapper>
        {pictures.map(pictureUrl => (
          <ImageUploadWrapper>
            <DeleteBtnStyled onClick={() => deleteImage(pictureUrl)} />
            <ImageStyled src={pictureUrl} alt="" />
          </ImageUploadWrapper>
        ))}
      </ImageUploadWrapper>
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
        <TitleInputStyled
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
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
      <InputEditor editorContentState={[editorContent, setEditorContent]} />
      <EntrySubmitBtn />
    </FormStyled>
  )

  function convertEditorInput() {
    const contentState = editorContent.getCurrentContent()
    const noteContent = convertToRaw(contentState)
    return JSON.stringify(noteContent)
  }

  function handleDateChange(value) {
    setDate(value)
  }

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
      tags,
      editorContent: convertEditorInput()
    }

    setIsCreated(true)
    editEntryData.id ? onSubmit(editEntryData.id, data) : onSubmit(data)

    form.reset()
    setPictures([])
    form.title.focus()
  }

  function upload(event) {
    uploadImage(event)
      .then(response => {
        setPictures([...pictures, response.data.url])
      })
      .catch(err => {
        console.log(err)
        alert(err)
      })
  }

  function handleCheck(event) {
    const newTags = { ...tags, [event.target.value]: !tags[event.target.value] }
    setTags(newTags)
  }

  function getContentState() {
    try {
      const noteContent = JSON.parse(editEntryData.editorContent)
      const contentState = convertFromRaw(noteContent)
      return contentState
    } catch {
      console.log('tried to parse json')
    }
  }

  function deleteImage(pictureUrl) {
    const newPictures = pictures.filter(picture => picture !== pictureUrl)
    setPictures(newPictures)
  }
}
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  overflow-y: scroll;
  margin-bottom: 20px;
`
const TitleInputStyled = styled.input`
  padding: 5px;
  font-size: 16px;
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
const DeleteBtnStyled = styled(Delete)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 25px;
  color: var(--white);
  cursor: pointer;
  z-index: 4;
  :hover {
    color: var(--lightblue);
  }
`