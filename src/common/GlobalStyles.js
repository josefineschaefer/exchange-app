import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Helvetica Neue";
    color: black; 
  }

  body{
    overflow-y: scroll;
  }
`
