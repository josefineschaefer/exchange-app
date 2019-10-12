import React from 'react'
import styled from 'styled-components/macro'
// import PropTypes from 'prop-types'

// EntryDate.PropTypes = {
//   fullDate: PropTypes.?
// }

export default function EntryDate({fullDate}) {
  
  function renderableDate(fullDate) {
    const newDate = new Date(fullDate).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    return newDate
  }

  return (
  <DateStyled>{renderableDate(fullDate)}</DateStyled>
  )
}

const DateStyled = styled.span`
  font-size: 16px;
`
