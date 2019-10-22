import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Tag.propTypes = {
  text: PropTypes.string
}

export default function Tag({ tag }) {
  return <TagStyled>{tag}</TagStyled>
}

const TagStyled = styled.span`
  padding: 4px;
  border-radius: 3px;
  margin-right: 5px;
  background-color: #5ed2a7;
`

