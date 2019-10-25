import React, { useState, useCallback } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from './Tag'
import { NavLink } from 'react-router-dom'
import EditBtn from '../icons/EditBtn'
import DeleteBtn from '../icons/DeleteBtn'
import EntryDate from './EntryDate'
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown'
import { stateToHTML } from 'draft-js-export-html'
import { convertFromRaw } from 'draft-js'

Entry.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  deleteData: PropTypes.func
  // fullDate: PropTypes.instanceOf(Date)
  // _id: PropTypes.string
}

export default function Entry({
  title,
  fullDate,
  text,
  _id,
  deleteData,
  image,
  tags,
  children,
  editorContent
}) {
  const [isTextVisible, setIsTextVisible] = useState(false)
  const sectionElement = useCallback(
    el => {
      if (el && editorContent) {
        const noteContent = JSON.parse(editorContent)
        const contentState = convertFromRaw(noteContent)
        const textOutput = stateToHTML(contentState)
        el.innerHTML = textOutput
      }
    },
    [editorContent]
  )

  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }

  const arrayOfTags = Object.keys(tags).map(function(key) {
    return [key, tags[key]]
  })

  const newArray = arrayOfTags
    .filter(item => item.includes(true))
    .map(item => item[0])

  return (
    <EntryStyled onClick={toggleText}>
      <HeaderStyled>
        <TitleStyled>
          <span>{title}</span>
          <div>
            <NavLink
              to={{
                pathname: '/edit',
                entryData: {
                  title,
                  fullDate,
                  text,
                  tags,
                  image,
                  id: _id,
                  editorContent
                }
              }}
            >
              <EditBtn />
            </NavLink>
            <DeleteBtn deleteData={deleteData} _id={_id}></DeleteBtn>
          </div>
        </TitleStyled>
        <EntryDate fullDate={fullDate}></EntryDate>
        {children}
        <div>{newArray && newArray.map(tag => <Tag tag={tag} />)}</div>
        <ExpandIconStyled />
      </HeaderStyled>
      {isTextVisible && (
        <EntryBodyStyled>
          {image.map(picture => (
            <EntryImageStyled src={picture} />
          ))}
          <section ref={sectionElement}></section>
        </EntryBodyStyled>
      )}
    </EntryStyled>
  )
}

const EntryStyled = styled.div`
  border-radius: 5px;
  border-bottom: 1px solid #808782;
  margin: 5px;
  display: flex;
  flex-direction: column;
`
const HeaderStyled = styled.div`
  background-color: var(--white);
  padding: 30px;
  position: relative;
  box-shadow: 5px 5px 10px 1px rgb(247, 247, 252);
`
const ExpandIconStyled = styled(KeyboardArrowDown)`
  position: absolute;
  height: 30px;
  z-index: 5;
  right: 45%;
  color: var(--black);
  :hover {
    color: var(--lightblue);
  }
`

const TitleStyled = styled.div`
  font-size: 1.5em;
  text-align: left;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const EntryBodyStyled = styled.div`
  background-color: var(--white);
  padding: 20px;
  border-radius: 0 0 5px 5px;
`

const EntryImageStyled = styled.img`
  width: 100%;
  border-radius: 0 0 5px 5px;
`
