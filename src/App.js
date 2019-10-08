import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import CreateEntry from './CreateEntry'
import EditEntry from './EditEntry'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Header from './Header'
import { getEntries, patchEntry, postEntry, deleteEntry } from './services'

function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    getEntries().then(setEntries)
  }, [])

  function createEntry(entryData) {
    postEntry(entryData).then(entry => {
      setEntries([...entries, entry])
    })
  }

  function deleteData(id) {
    deleteEntry(id).then(selectedEntry => {
      console.log(selectedEntry)
      const index = entries.findIndex(entry => entry._id === selectedEntry._id)
      return setEntries([
        ...entries.slice(0, index),
        ...entries.slice(index + 1)
      ])
    })
  }

  function editEntry(id, data) {
    patchEntry(id, data)
    .then(selectedEntry => {
        const index = entries.findIndex(entry => entry._id === selectedEntry._id)
        setEntries([
          ...entries.slice(0, index),
          { title: selectedEntry.title, text: selectedEntry.text, date: selectedEntry.date},
          ...entries.slice(index + 1),
        ])
      })
    }
    
  
  return (
    <Router>
      <AppStyled>
        <Header> Mein Austauschjahr</Header>
        <Route
          exact
          path="/"
          render={() => <HomePage entries={entries} deleteData={deleteData} />}
        />
        <Route
          path="/create"
          render={props => {
            return <CreateEntry onSubmit={createEntry} />
          }}
        />
        <Route
          path="/edit"
          render={props => {
            return (
              <EditEntry
                onSubmit={editEntry}
                editEntryData={props.location.entryData}
              />
            )
          }}
        />
        <Navigation />
      </AppStyled>
    </Router>
  )
}
export default App

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
