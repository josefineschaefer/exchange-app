import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import TagFilter from '../components/TagFilter'
import GridVerticalIcon from '../icons/GridVertical'
import ImageIcon from '../icons/Image'

Gallery.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string)
}

export default function Gallery({ entries, onSelectTag }) {
  console.log(typeof entries)
  const allImages = entries
    .map(entry => entry.image)

    .join(',')
    .split(',')

  const [gridView, setGridView] = useState(false)

  return (
    <GalleryStyled>
      <FilterWrapperStyled>
        <TagFilterStyled
          tags={entries.tags}
          onClick={onSelectTag}
        ></TagFilterStyled>
      </FilterWrapperStyled>
      <IconsStyled>
        <GridVerticalIcon onClick={showGrid} />
        <ImageIcon onClick={showFullView} />
      </IconsStyled>
      {renderGalleryView()}
    </GalleryStyled>
  )

  function showGrid() {
    setGridView(true)
  }

  function showFullView() {
    setGridView(false)
  }

  function renderGalleryView() {
    if (gridView) {
      const imagesEven = allImages.filter((images, index) => index % 2 === 0)
      const imagesOdd = allImages.filter((images, index) => index % 2 !== 0)

      return (
        <ColumnWrapperStyled>
          <ColumnStyled>
            {imagesEven.map(imageUrl => (
              <ImageStyled src={imageUrl} alt="" />
            ))}
          </ColumnStyled>
          <ColumnStyled>
            {imagesOdd.map(imageUrl => (
              <ImageStyled src={imageUrl} alt="" />
            ))}
          </ColumnStyled>
        </ColumnWrapperStyled>
      )
    } else {
      return (
        <FullViewStyled>
          {allImages.map(imageUrl => (
            <ImageStyled src={imageUrl} alt="" />
          ))}
        </FullViewStyled>
      )
    }
  }
}

const ColumnWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const FilterWrapperStyled = styled.div`
  position: sticky;
  top: 0;
`
const GalleryStyled = styled.div`
  display: grid;
  overflow-y: auto;
  grid-gap: 5px;
`
const FullViewStyled = styled.div`
  display: grid;
`
const ColumnStyled = styled.div`
  display: grid;
  grid-auto-rows: min-content;
`
const TagFilterStyled = styled(TagFilter)`
  position: fixed;
`
const ImageStyled = styled.img`
  width: 100%;
  padding: 2.5px 5px;
`
const IconsStyled = styled.div`
  position: absolute;
  display: flex;
  left: 10px;
  bottom: 70px;
`
