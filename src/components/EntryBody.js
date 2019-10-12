import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

EntryBody.propTypes = {
  text: PropTypes.string, 
  image: PropTypes.arrayOf(PropTypes.string)
}

export default function EntryBody({
  text,
  image
}){

  return(
    <EntryBodyStyled>
    {image.map(picture => {
      return <EntryImageStyled src={picture} />
    })}
    {text}
  </EntryBodyStyled>
  )
}

const EntryBodyStyled = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`

const EntryImageStyled = styled.img`
  width: 100%;
  border-radius: 0 0 5px 5px;
`