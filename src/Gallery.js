import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Gallery.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string)
}

export default function Gallery({ entries }) {
  const allImages = entries.map(entry => entry.image).join(',').split(',')

  return (
    <GalleryStyled>
      <>
        {allImages.map(imageUrl => (
          <ImageStyled src={imageUrl} alt="" />
        ))}
      </>
    </GalleryStyled>
  )
}

const GalleryStyled = styled.div`
  display: grid;
  overflow-y: auto;
  margin-top: -4px;
`

const ImageStyled = styled.img`
  width: 100%;
  padding: 2.5px 5px;
`
