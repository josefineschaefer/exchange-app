const mongoose = require('mongoose')

const Marker = mongoose.model('Marker', {
  title: String,
  content: String,
  latLng: Object, 

})

module.exports = Marker