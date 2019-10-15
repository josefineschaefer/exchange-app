import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

TagFilter.propTypes = {
  onClick: PropTypes.func
}

export default function TagFilter({ onClick }) {
  return (
    <FilterListStyled>
      <TagFilterStyled onClick={() => onClick('all')}>
        Alle Bilder
      </TagFilterStyled>
      <TagFilterStyled onClick={() => onClick('Gastfamilie')}>
        Gastfamilie
      </TagFilterStyled>
      <TagFilterStyled onClick={() => onClick('Schule')}>
        Schule
      </TagFilterStyled>
      <TagFilterStyled onClick={() => onClick('Ausflug')}>
        Ausflug
      </TagFilterStyled>
    </FilterListStyled>
  )
}

const FilterListStyled = styled.div`
  display: flex;
`

const TagFilterStyled = styled.button`
  padding: 10px;
  margin: 2px;
  border-radius: 3px;
  background-color: #f4c3a4;
  border: none;
  width: 100%;
`
