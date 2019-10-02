import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import CreateEntry from './CreateEntry'
import exchange1 from './images/exchange1.jpg'
import exchange2 from './images/exchange2.jpg'
import happyexchangees from './images/happyexchangees.jpg'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import { getEntries, patchEntry, postEntry } from './services'

function App() {
  const [entries, setEntries] = useState([])
  
  useEffect(() => {
    getEntries().then(setEntries)
  }, [])

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
