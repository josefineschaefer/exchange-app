import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Create } from 'styled-icons/material/Create'

Entry.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}

export default function Entry({ title, date, text, image, _id, deleteData }) {
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
          <div>
            {title}
            <NavLink
              to={{
                pathname: '/edit',
                cardData: {
                  title,
                  date,
                  text, 
                  id: _id,
                }
              }}
            >
              <EditIconStyled />
            </NavLink>
            <DeleteButtonStyled onClick={handleClick}>X</DeleteButtonStyled>
          </div>
        </TitleStyled>
        <DateStyled>{date}</DateStyled>
      </HeaderStyled>
      {isTextVisible && (
        <EntryBodyStyled>
          <EntryImageStyled src={image} />
          {text}
        </EntryBodyStyled>
      )}
    </EntryStyled>
  )
}

const DeleteButtonStyled = styled.button`
  // add styling //
`

const EditIconStyled = styled(Create)`
  height: 14px;
  margin: 0 10px;
  :active {
    color: white;
  }
`

const EntryStyled = styled.div`
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
  display: flex;
  flex-direction: column;
`
const HeaderStyled = styled.div`
  font-weight: bold;
  background-color: #ec8647;
  padding: 20px;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  justify-content: space-between;
`

const TitleStyled = styled.span`
  font-size: 1em;
  text-align: left;
`

const DateStyled = styled.span`
  text-align: right;
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
