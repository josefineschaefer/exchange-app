import React from 'react'
import TagFilter from '../components/TagFilter'

import { CallToAction } from 'styled-icons/material'

export default {
  title: 'Tag'
}

export const tagFilter = () => {
  return <TagFilter onClick={CallToAction('onClick')} text="Hallo"></TagFilter>
}
