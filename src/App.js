import React, { useState } from 'react'
import HomePage from './HomePage'
import CreateEntry from './CreateEntry'
import exchange1 from './images/exchange1.jpg'
import exchange2 from './images/exchange2.jpg'
import happyexchangees from './images/happyexchangees.jpg'
import GlobalStyles from './common/GlobalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  const [entries, setEntries] = useState([  {
    title: 'Third Entry',
    date: '05. Aug 2018',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: happyexchangees
  },
  {
    title: 'Second Entry',
    date: '03. Aug 2018',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: exchange1
  },
  {
    title: 'First Entry',
    date: '01. Aug 2018',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: exchange2
  }])

  function createEntry(entry) {
    setEntries([...entries, entry])
  }

  return (
    <Router>
      <GlobalStyles />
      <HomePage entries={entries}></HomePage>
      <CreateEntry onSubmit={createEntry} />
    </Router>
  )
}
export default App
