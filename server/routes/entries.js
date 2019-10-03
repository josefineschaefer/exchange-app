const router = require('express').Router()
const Entry = require('../models/Entry')

router.get('/', (req, res) => {
  Entry.find()
  .then(entries => res.json(entries))
  .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Entry.find({ _id: req.params.id })
    .then(entries => res.json(entries))
    .catch(err => res.json(err))
})


router.post('/', (req, res) => {
  Entry.create(req.body)
    .then(entry => res.json(entry))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Entry.findByIdAndUpdate({ _id: req.params.id}, req.body, { new: true })
    .then(entry => res.json(entry))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Entry.findByIdAndDelete(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.json(err))
})

module.exports = router
