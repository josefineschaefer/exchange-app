import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import EntryHeader from './EntryHeader'
import EntryBody from './EntryBody'
import Tag from './Tag'

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
  tags
}) {
  const [isTextVisible, setIsTextVisible] = useState(false)
  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }

const arrayOfTags = Object.keys(tags).map(function(key) {
  return [(key),tags[key]]
})

const newArray = arrayOfTags.filter(item => item.includes(true)).map(item=> item[0])

  return (
    <EntryStyled onClick={toggleText}>
      <EntryHeader
        title={title}
        fullDate={fullDate}
        deleteData={deleteData}
        _id={_id}
      >
        <div>{newArray && newArray.map(tag => <Tag tag={tag} />)}</div>
      </EntryHeader>
      {isTextVisible && <EntryBody text={text} image={image}></EntryBody>}
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
