import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Entry from './Entry'
import CreateEntry from './CreateEntry'
import happyexchangees from './images/happyexchangees.jpg'
import exchange1 from './images/exchange1.jpg'
import exchange2 from './images/exchange2.jpg'
import worldmap from './images/worldmap.png'
import GlobalStyles from './common/GlobalStyles'


function App() {
  const [entries, setEntries] = useState([
    {
      title: 'Third Entry',
      date: '05.08.2018',
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      image: happyexchangees
    },
    {
      title: 'Second Entry',
      date: '03.08.2018',
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      image: exchange1
    },
    {
      title: 'First Entry',
      date: '01.08.2018',
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      image: exchange2
    }
  ])


  
  function createEntry(entry){
   setEntries([...entries, entry])
   console.log(entries)
}

const StyledHeaderImage = styled.img`
  width: 100%;
`

  return (
    <>
      <GlobalStyles />
      <StyledHeaderImage src={worldmap} />
      <div>
        {entries.map(entry => (
          <Entry
            title={entry.title}
            date={entry.date}
            text={entry.text}
            image={entry.image}
          />
        ))}
      </div>
      <CreateEntry onSubmit={createEntry} />
    </>
  )
}
export default App
