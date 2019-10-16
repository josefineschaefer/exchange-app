import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Tag from './Tag'
import { NavLink } from 'react-router-dom'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'
import EntryDate from './EntryDate'

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
  children
}) {
  const [isTextVisible, setIsTextVisible] = useState(false)
  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }

  const arrayOfTags = Object.keys(tags)
  .map(function(key) {
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
                  id: _id
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
      </HeaderStyled>
      {isTextVisible && <EntryBodyStyled>
      {image.map(picture => {
        return <EntryImageStyled src={picture} />
      })}
      {text}
    </EntryBodyStyled>}
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
const HeaderStyled = styled.div`
  background-color: #ec8647;
  padding: 20px;
  border-radius: 5px 5px 5px 5px;
`
const TitleStyled = styled.div`
  font-size: 1.5em;
  text-align: left;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const EntryBodyStyled = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`

const EntryImageStyled = styled.img`
  width: 100%;
  border-radius: 0 0 5px 5px;
`