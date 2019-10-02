import React, { useState } from 'react'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import CreateEntry from './CreateEntry'
import exchange1 from './images/exchange1.jpg'
import exchange2 from './images/exchange2.jpg'
import happyexchangees from './images/happyexchangees.jpg'
import GlobalStyles from './common/GlobalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'

function App() {
  const [entries, setEntries] = useState([
    {
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
    }
  ])

  function createEntry(entry) {
    setEntries([...entries, entry])
  }

  const AppStyled = styled.div`
    display: grid;
    grid-template-rows: 48px auto 48px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
  `

  return (
    <Router>
      <GlobalStyles />
      <AppStyled>
        <Header> Mein Austauschjahr</Header>
        <Route exact path="/" render={() => <HomePage entries={entries} />} />
        <Route
          path="/create"
          render={() => <CreateEntry onSubmit={createEntry} />}
        />
        <Navigation />
      </AppStyled>
    </Router>
  )
}
export default App
