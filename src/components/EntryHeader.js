import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import EditBtn from './EditBtn'
import DeleteBtn from './DeleteBtn'
import EntryDate from './EntryDate'

EntryHeader.propTypes = {
  title: PropTypes.string,
  deleteData: PropTypes.func,
  text: PropTypes.string
  // _id: PropTypes.string,
  // fullDate: PropTypes.???
  //image: PropTypes.string?
  //children: PropTypes.node
}

export default function EntryHeader({
  title,
  fullDate,
  deleteData,
  _id,
  text,
  image,
  children
}) {
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
          <DeleteBtn deleteData={deleteData} _id={_id}></DeleteBtn>
        </div>
      </TitleStyled>
      <EntryDate fullDate={fullDate}></EntryDate>
      {children}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  background-color: white;
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
