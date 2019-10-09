const mongoose = require('mongoose')

const Entry = mongoose.model('Entry', {
  title: String,
  date: {
    type: String, 
    default: Date.now,
  },
  text: String,
  image: Array, 

})

module.exports = Entry