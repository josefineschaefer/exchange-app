import React from 'react'
import Gallery from './Gallery'

export default {
  title: 'Gallery',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '300px' }}>{storyFn()}</div>
}

const entries = [
  {
    image:
      'http://res.cloudinary.com/exchange-app/image/upload/v1570616825/ut43u8858jmvi55tpb46_320_213-f45534aa_mdbny1.jpg'
  },
  {
    image:
      'http://res.cloudinary.com/exchange-app/image/upload/v1570617026/cutefood_uzfkia.jpg'
  },
  {
    image:
      'http://res.cloudinary.com/exchange-app/image/upload/v1570616569/www.usnews.com_tcbo5k.jpg'
  }
]
export const exampleGallery = () => {
  return <Gallery entries={entries}></Gallery>
}
