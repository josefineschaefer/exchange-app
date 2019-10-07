import React from 'react'
import Entry from './Entry.js'

export default {
  title: 'Entry',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '350px', padding: '15px' }}>{storyFn()}</div>
}

export const entry = () => (
  <Entry
    title="First Entry"
    date="01.08.2019"
    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  ></Entry>
)
