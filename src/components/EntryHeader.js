import React from 'react'
import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Create } from 'styled-icons/material/Create'
import { Delete } from 'styled-icons/material/Delete'


export default function EntryHeader({
  title,
  fullDate, 
  deleteData, 
  _id,
  text,
  image
}){

  function handleClick(event) {
    event.stopPropagation()
    deleteData(_id)
  }

  function renderableDate(fullDate) {
    const newDate = new Date(fullDate).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return newDate
  }

return (
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
)
}

const HeaderStyled = styled.div`
  background-color: #ec8647;
  padding: 20px;
  border-radius: 5px 5px 5px 5px;
  display: grid;
`

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
const DateStyled = styled.span`
  font-size: 16px;
`
const TitleStyled = styled.span`
  font-size: 1.5em;
  text-align: left;
  display: flex;
  width: 100%;
  justify-content: space-between;
`