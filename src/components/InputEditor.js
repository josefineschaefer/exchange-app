import React from 'react'
import styled from 'styled-components/macro'
import { Editor, RichUtils } from 'draft-js'
import { Bold } from 'styled-icons/fa-solid/Bold'
import { Italic } from 'styled-icons/fa-solid/Italic'
import { Underline } from 'styled-icons/fa-solid/Underline'
import PropTypes from 'prop-types'

InputEditor.propTypes = {
  editorContentState: PropTypes.array
}

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
        <BoldBtn onClick={onBoldClick} />
        <ItalicBtn onClick={onItalicClick} />
        <UnderlineBtn onClick={onUnderlineClick} />
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
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
  height: 32px;
`
const ItalicBtn = styled(Italic)`
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
  height: 32px;
`
const UnderlineBtn = styled(Underline)`
  padding: 5px;
  margin: 10px;
  border: 1px solid var(--turquoise);
  border-radius: 5px;
  background-color: var(--turquoise);
  height: 32px;
`

const EntryEditorButtons = styled.section`
  width: 70vw;
  display: flex;
  color: var(--black);
`
