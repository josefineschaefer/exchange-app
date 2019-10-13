import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

Tag.propTypes = {
  text: PropTypes.string
}

export default function Tag({ text }) {
  return <TagStyled>{text}</TagStyled>
}

const TagStyled = styled.div`
  padding: 2px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
`
