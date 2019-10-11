import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Create } from 'styled-icons/material/Create'
import { Delete } from 'styled-icons/material/Delete'

Entry.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string)
}

export default function Entry({
  title,
  fullDate,
  text,
  image,
  _id,
  deleteData
}) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }

  function handleClick(event) {
    event.stopPropagation()
    deleteData(_id)
  }

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
                  image,
                  id: _id
                }
              }}
            >
              <EditIconStyled />
            </NavLink>
            <DeleteStyled onClick={handleClick} />
          </div>
        </TitleStyled>
        <DateStyled>{renderableDate(fullDate)}</DateStyled>
      </HeaderStyled>
      {isTextVisible && (
        <EntryBodyStyled>
          {image.map(picture => {
            return <EntryImageStyled src={picture} />
          })}
          {text}
        </EntryBodyStyled>
      )}
    </EntryStyled>
  )

  function renderableDate(fullDate) {
    const newDate = new Date(fullDate).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return newDate
  }
}
const DeleteStyled = styled(Delete)`
  height: 20px;
  color: black;
  :hover {
    color: white;
  }
`
const EditIconStyled = styled(Create)`
  height: 16px;
  margin: 0 5px;
  color: black;
  :hover {
    color: white;
  }
`

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
  display: grid;
`

const TitleStyled = styled.span`
  font-size: 1.5em;
  text-align: left;
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const DateStyled = styled.span`
  font-size: 16px;
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
