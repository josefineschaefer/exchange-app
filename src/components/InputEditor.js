import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Editor, RichUtils, EditorState } from 'draft-js'
import { Bold } from 'styled-icons/fa-solid/Bold'
import { Italic } from 'styled-icons/fa-solid/Italic'
import { Underline } from 'styled-icons/fa-solid/Underline'
import { Highlighter } from 'styled-icons/fa-solid/Highlighter'

export default function InputEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const styleMap = {
    HIGHLIGHT: {
      backgroundColor: '#FFF4AA'
    }
  }

  return (
    <>
      <EntryEditorButtons>
        {/* <Link to="/"><img alt='Go back' src={chevronLeft} /></Link> */}
        <Link to="/editor" onClick={onBoldClick}>
          <BoldBtn alt="Bold" />
        </Link>
        <Link to="/editor" onClick={onItalicClick}>
          <ItalicBtn alt="Italic" />
        </Link>
        <Link to="/editor" onClick={onUnderlineClick}>
          <UnderlineBtn alt="Underscore" />
        </Link>
        <Link to="/editor" onClick={onHighlightClick}>
          <HighlightBtn alt="Highlight" />
        </Link>
      </EntryEditorButtons>
      <EntryEditorContent>
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          customStyleMap={styleMap}
          placeholder="Hier kannst du deinen Eintrag erstellen..."
        />
      </EntryEditorContent>
    </>
  )

  function onChange(editorState) {
    setEditorState(editorState)
  }

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  function onItalicClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
  }

  function onBoldClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  function onUnderlineClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
  }

  function onHighlightClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'))
  }
}

const EntryEditorContent = styled.section`
  padding: 5px;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: #c0c0c0;
`
const BoldBtn = styled(Bold)`
  color: black;
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid #5ed2a7;
  border-radius: 5px;
  background-color: #5ed2a7;
`
const ItalicBtn = styled(Italic)`
  color: black;
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid #5ed2a7;
  border-radius: 5px;
  background-color: #5ed2a7;
`
const UnderlineBtn = styled(Underline)`
  color: black;
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid #5ed2a7;
  border-radius: 5px;
  background-color: #5ed2a7;
`
const HighlightBtn = styled(Highlighter)`
  color: black;
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid #5ed2a7;
  border-radius: 5px;
  background-color: #5ed2a7;
`
const EntryEditorButtons = styled.section`
  width: 70vw;
  display: flex;
  z-index: 1000;
`
