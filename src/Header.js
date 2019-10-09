import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node
}

export default function Header({children}) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.div`
  background-color: #ec8647;
  display: flex;
  font-weight: bold;
  font-size: 2em;
  justify-content: center;
  align-items: center;
`
