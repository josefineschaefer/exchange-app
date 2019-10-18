const router = require('express').Router()
const Marker = require('../models/Marker')

router.get('/', (req, res) => {
  Marker.find()
  .then(markers => res.json(markers))
  .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Marker.create(req.body)
    .then(marker => res.json(marker))
    .catch(err => res.json(err))
})

// router.patch('/:id', (req, res) => {
//   Marker.findByIdAndUpdate({ _id: req.params.id}, req.body, { new: true })
//     .then(marker => res.json(marker))
//     .catch(err => res.json(err))
// })

// router.delete('/:id', (req, res) => {
//   Marker.findByIdAndDelete(req.params.id)
//     .then(marker => res.json(marker))
//     .catch(err => res.json(err))
// })

module.exports = router
