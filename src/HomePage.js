import React from 'react'
import styled from 'styled-components/macro'
import worldmap from './images/worldmap.png'
import Entry from './Entry'

export default function Homepage({ entries }) {
  
  return (
    <div>
      <StyledHeaderImage src={worldmap} />
      {entries.map(entry => 
        <Entry
          title={entry.title}
          date={entry.date}
          text={entry.text}
          image={entry.image}
        />
      )}
    </div>
  )
}

const StyledHeaderImage = styled.img`
width: 100%;
`
