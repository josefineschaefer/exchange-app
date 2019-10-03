const mongoose = require('mongoose')

const Entry = mongoose.model('Entry', {
  title: String,
  date: {
    type: String, 
    default: Date.now,
  },
  text: String,
  image: String, 

})

module.exports = Entry