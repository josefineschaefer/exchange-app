import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import { getEntries, patchEntry, postEntry, deleteEntry } from './services'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import Header from './common/Header'
import HomePage from './pages/HomePage'
import CreateEntry from './pages/CreateEntryPage'
import EditEntry from './pages/EditEntryPage'
import Navigation from './common/Navigation'
import Gallery from './pages/GalleryPage'
import MapPage from './pages/MapPage'

function App() {
  const [entries, setEntries] = useState([])
  const [selectedTag, setSelectedTag] = useState('all')

  useEffect(() => {
    getEntries().then(setEntries)
  }, [])

  // const tags = entries.map(entry => entry.tags)
  // console.log('tags', tags)

  const AlertTemplate = ({ style, message }) => (
    <AlertStyled style={style} >{message}</AlertStyled>
  )

  const options = {
    position: positions.MIDDLE,
    timeout: 2000,
    offset: '30px',
    transition: transitions.SCALE
  }

  return (
    <AlertProvider template={AlertTemplate} message="true" {...options}>
      <Router>
        <AppStyled>
          <Header> Mein Austauschjahr</Header>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage entries={entries} deleteData={deleteData} />
            )}
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
                onSelectTag={setSelectedTag}
              />
            )}
          />
          <Route path="/map" render={() => <MapPage />} />
          <Navigation />
        </AppStyled>
      </Router>
    </AlertProvider>
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
  grid-template-rows: 60px auto 60px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #white;
`

const AlertStyled = styled.div`
  border: none;
  padding: 20px;
  background-color: #c3efdf;
  font-weight: bold;
  border-radius: 5px;
`
