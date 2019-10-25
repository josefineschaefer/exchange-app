import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Editor, RichUtils } from 'draft-js'
import { Bold } from 'styled-icons/fa-solid/Bold'
import { Italic } from 'styled-icons/fa-solid/Italic'
import { Underline } from 'styled-icons/fa-solid/Underline'
import { Highlighter } from 'styled-icons/fa-solid/Highlighter'

export default function InputEditor({ editorContentState }) {
  const [editorContent, setEditorContent] = editorContentState

  const styleMap = {
    HIGHLIGHT: {
      backgroundColor: 'var(--lightturquoise)'
    }
  }

  return (
    <>
      <EntryEditorButtons>
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
          editorState={editorContent}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          customStyleMap={styleMap}
          placeholder="Hier kannst du deinen Eintrag erstellen..."
        />
      </EntryEditorContent>
    </>
  )

  function onChange(editorState) {
    setEditorContent(editorState)
  }

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editorContent, command)
    if (newState) {
      onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  function onItalicClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorContent, 'ITALIC'))
  }

  function onBoldClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorContent, 'BOLD'))
  }

  function onUnderlineClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorContent, 'UNDERLINE'))
  }

  function onHighlightClick(e) {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorContent, 'HIGHLIGHT'))
  }
}

const EntryEditorContent = styled.section`
  padding: 5px;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: var(--black);
  ::placeholder {
    color: #c0c0c0;
  }
`
const BoldBtn = styled(Bold)`
  color: var(--black);
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
`
const ItalicBtn = styled(Italic)`
  color: var(--black);
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
`
const UnderlineBtn = styled(Underline)`
  color: black;
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
`
const HighlightBtn = styled(Highlighter)`
  color: var(--black);
  height: 32px;
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
`
const EntryEditorButtons = styled.section`
  width: 70vw;
  display: flex;
`
