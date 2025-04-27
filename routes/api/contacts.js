const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'Hmw2 done' })
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'Hmw2 done' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'Hmw2 done' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'Hmw2 done' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'Hmw2 done' })
})

module.exports = router
