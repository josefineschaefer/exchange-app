import React from 'react'
import Header from '../common/Header'

export default {
  title: 'Header',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const exampleHeader = () => {
  return <Header>Mein Austauschjahr</Header>
}
