import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Entry.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
}

export default function Entry({ title, date, text, image }) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  function toggleText() {
    setIsTextVisible(!isTextVisible)
  }
  return (
    <EntryStyled onClick={toggleText}>
      <HeaderStyled>
        <TitleStyled>
          <div>
            {title}
            <EditIconStyled
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pencil-alt"
              class="svg-inline--fa fa-pencil-alt fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
              ></path>
            </EditIconStyled>
          </div>
        </TitleStyled>
        <DateStyled>{date}</DateStyled>
      </HeaderStyled>
      {isTextVisible && (
        <EntryBodyStyled>
          <EntryImageStyled src={image} />
          {text}
        </EntryBodyStyled>
      )}
    </EntryStyled>
  )
}

const EditIconStyled = styled.svg`
  height: 14px;
  margin: 0 10px;
`

const EntryStyled = styled.div`
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  margin: 10px;
  display: flex;
  flex-direction: column;
`
const HeaderStyled = styled.div`
  font-weight: bold;
  background-color: #ec8647;
  padding: 20px;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  justify-content: space-between;
`

const TitleStyled = styled.span`
  font-size: 1em;
  text-align: left;
`

const DateStyled = styled.span`
  text-align: right;
`

const EntryBodyStyled = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 5px 5px;
`

const EntryImageStyled = styled.img`
  width: 100%;
  border-radius: 0 0 5px 5px;
`
