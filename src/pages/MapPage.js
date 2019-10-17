import React from 'react'
import styled from 'styled-components/macro'
import Map from '../components/Map'

export default function MapPage() {
  return <MapStyled />
}

const MapStyled = styled(Map)`
  display: grid;
  overflow-y: auto;
`
