import React from 'react'
import styled from 'styled-components/macro'
import worldmap from './images/worldmap.png'
import Entry from './Entry'
import PropTypes from 'prop-types'

Homepage.propTypes = {
  entries: PropTypes.array,
  deleteData: PropTypes.func,
  editData: PropTypes.func
}

export default function Homepage({ entries, deleteData, editData }) {
  return (
    <StyledHomePage>
      <StyledHeaderImage src={worldmap} />
      <Scroller>
        {entries.map(entry => (
          <Entry
            {...entry}
            key={entry._id}
            deleteData={deleteData}
            editData={editData}
          />
        ))}
      </Scroller>
    </StyledHomePage>
  )
}

const StyledHomePage = styled.div`
  display: grid;
  overflow-y: auto;
`

const StyledHeaderImage = styled.img`
  width: 100%;
  padding: 20px;
`

const Scroller = styled.div`
  overflow-y: auto;
  scroll-behavior: smooth;
`
