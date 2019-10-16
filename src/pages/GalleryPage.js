import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import TagFilter from '../components/TagFilter'

Gallery.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string)
}

export default function Gallery({ entries, onSelectTag }) {
  const allImages = entries
    .map(entry => entry.image)
    .join(',')
    .split(',')

  return (
    <GalleryStyled>
      <TagFilter tags={entries.tags} onClick={onSelectTag}></TagFilter>
      {allImages.map(imageUrl => (
        <ImageStyled src={imageUrl} alt="" />
      ))}
    </GalleryStyled>
  )
}

const GalleryStyled = styled.div`
  display: grid;
  overflow-y: auto;
`

const ImageStyled = styled.img`
  width: 100%;
  padding: 2.5px 5px;
`
