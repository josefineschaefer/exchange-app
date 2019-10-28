import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Icon from '../icons/Icon'

Header.propTypes = {
  children: PropTypes.node
}

export default function Header({ children }) {
  return (
    <HeaderStyled>
      <Icon />
      {children}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  background-image: linear-gradient(
    to left,
    var(--turquoise),
    var(--lightblue)
  );
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2em;
`
