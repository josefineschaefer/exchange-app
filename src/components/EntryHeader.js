import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'
import EntryDate from './EntryDate'

EntryHeader.propTypes = {
  title: PropTypes.string,
  deleteData: PropTypes.func
  // _id: PropTypes.string,
  // fullDate: PropTypes.???
}

export default function EntryHeader({
  title,
  fullDate, 
  deleteData, 
  _id,
  text,
  image
}){

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
      <EditBtn />
    </NavLink>
    <DeleteBtn 
      deleteData={deleteData} 
      _id={_id}></DeleteBtn>
  </div>
</TitleStyled>
<EntryDate fullDate={fullDate}></EntryDate>
</HeaderStyled>
)
}

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