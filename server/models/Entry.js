const mongoose = require('mongoose')

const Entry = mongoose.model('Entry', {
  title: String,
  fullDate: {
    type: Object, 
    default: Date.now,
  },
  image: Array, 
  tags: Object,
  editorContent: String
})

module.exports = Entry
