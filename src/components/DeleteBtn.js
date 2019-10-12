import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Delete } from 'styled-icons/material/Delete'

DeleteBtn.propTypes = {
  deleteData: PropTypes.func,
  // _id: PropTypes.string,
}

export default function DeleteBtn({deleteData, _id}){

  function handleClick(event) {
    event.stopPropagation()
    deleteData(_id)
  }

  return(
    <DeleteStyled onClick={handleClick} />
  )
}

const DeleteStyled = styled(Delete)`
  height: 20px;
  color: black;
  :hover {
    color: white;
  }
`