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
        {
          title: selectedEntry.title,
          text: selectedEntry.text,
          date: selectedEntry.date
        },
        ...entries.slice(index + 1)
      ])
    })
  }

  const tags = entries.map(entry => entry.tags)
  // const newArray = arrayOfTags.filter(item => item.includes(true)).map(item=> item[0])
 
  // const allTags = entries.map(entry => entry.tags)
  // console.log("result", allTags)  

  console.log("Result", tags)

  const filteredEntries =
    selectedTag === 'all'
      ? entries
      : entries.filter(entry => entry.tags.includes(selectedTag))



  return (
    <Router>
      <AppStyled>
        <Header> Mein Austauschjahr</Header>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              entries={entries}
              deleteData={deleteData}
            />
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
              entries={filteredEntries}
              tags={tags}
              onSelectTag={setSelectedTag}
            />
          )}
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
