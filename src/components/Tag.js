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
  padding: 2px;
  background: #ccc;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
`
