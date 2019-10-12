import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import EntryHeader from './EntryHeader'
import EntryBody from './EntryBody'

Entry.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string)
}

export default function Entry({
  title,
  fullDate,
  text,
  _id,
  deleteData,
  image
}) 
{
  const [isTextVisible, setIsTextVisible] = useState(false)
  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }

  return (
    <EntryStyled onClick={toggleText}>
      <EntryHeader 
      title={title} 
      fullDate={fullDate} 
      deleteData={deleteData} 
      _id={_id}
  ></EntryHeader>
      {isTextVisible && (
        <EntryBody 
        text={text} 
        image={image}></EntryBody>
      )}
    </EntryStyled>
  )
        }

const EntryStyled = styled.div`
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 5px;
  display: flex;
  flex-direction: column;
`
