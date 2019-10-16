import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { getEntries, patchEntry, postEntry, deleteEntry } from './services'

import Header from './common/Header'
import HomePage from './pages/HomePage'
import CreateEntry from './pages/CreateEntryPage'
import EditEntry from './pages/EditEntryPage'
import Navigation from './common/Navigation'
import Gallery from './pages/GalleryPage'

function App() {
  const [entries, setEntries] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')

  useEffect(() => {
    getEntries().then(setEntries)
  }, [])

  const tags = entries.map(entry => entry.tags)

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
          render={() => <CreateEntry onSubmit={createEntry} />}
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
        <Route
          path="/gallery"
          render={() => (
            <Gallery
              entries={getFilteredEntries()}
              tags={tags}
              onSelectTag={setSelectedTag}
            />
          )}
        />
        <Navigation />
      </AppStyled>
    </Router>
  )

  function getFilteredEntries() {
    return selectedTag === 'all'
      ? entries
      : entries.filter(entry => entry.tags[selectedTag])
  } 

  function createEntry(entryData) {
    postEntry(entryData).then(entry => {
      setEntries([...entries, entry])
    })
  }

  function deleteData(id) {
    deleteEntry(id).then(selectedEntry => {
      const index = entries.findIndex(entry => entry._id === selectedEntry._id)
      return setEntries([
        ...entries.slice(0, index),
        ...entries.slice(index + 1)
      ])
    })
  }

  function editEntry(id, data) {
    patchEntry(id, data).then(selectedEntry => {
      const index = entries.findIndex(entry => entry._id === selectedEntry._id)
      setEntries([
        ...entries.slice(0, index),
        selectedEntry,
        ...entries.slice(index + 1)
      ])
    })
  }
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
