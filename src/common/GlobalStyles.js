import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

:root{
  --turquoise: #5ed2a7;
  --lightblue: #3eb4be;
  --lightturquoise: #c3efdf;
  --grey: #828282;
  --black: black; 
  --white: white; 
}

  * {
    box-sizing: border-box;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body{
    overflow-y: scroll;
  }

  .public-DraftEditorPlaceholder-inner {
    color: #AEAEAE;
  }
`
