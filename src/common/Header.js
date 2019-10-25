import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { BookOpen } from 'styled-icons/fa-solid/BookOpen'

Header.propTypes = {
  children: PropTypes.node
}

export default function Header({ children }) {
  return (
    <HeaderStyled>
      <BookStyled />
      <TextStyled>{children}</TextStyled>
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
`

const TextStyled = styled.div`
  font-size: 2em;
`

const BookStyled = styled(BookOpen)`
  display: flex;
  height: 26px;
  font-weight: bold;
`
