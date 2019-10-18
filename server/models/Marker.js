const mongoose = require('mongoose')

const Marker = mongoose.model('Marker', {
  latLng: Object
})

module.exports = Marker