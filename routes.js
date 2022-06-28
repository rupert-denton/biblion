const express = require('express')
const db = require('./db')
const util = require('./helpers')
const router = express.Router()

// izes/:prizeId - prize page with all the details
// resources
//resource for home page
// GET /api/prizes - Nobel, Pulitzer
router.get('/', (req, res) => {
  db.getAllPrizes()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//resource for prize page
// GET /prizes/:prizeId - information about the prize
// GET /prize/s:prizeId/books - [{ name:, blurb:, ISBN:, author: { name:, } }, book, book]

//resource for book page
// GET /books/:bookId - { name:, blurb:, ISBN:, author: {} }

//resource for author page
// GET /authors/:authorId - { name:, books: [{ name:, blurb:, ISBN: }] }

module.exports = router
