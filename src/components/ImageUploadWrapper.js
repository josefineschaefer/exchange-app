import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ImageUploadWrapper.propTypes = {
  children: PropTypes.node
}

export default function ImageUploadWrapper({ children }) {
  return <StyledImageUploadWrapper>{children}</StyledImageUploadWrapper>
}

const StyledImageUploadWrapper = styled.div`
  position: relative;
`

