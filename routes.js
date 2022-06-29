const express = require('express')
const db = require('./db')
const util = require('./helpers')
const router = express.Router()

// izes/:prizeId - prize page with all the details
// resources
//resource for home page

// GET /api/v1 - Nobel, Pulitzer
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
router.get('/prize/:prizeId', (req, res) => {
  let id = req.params.prizeId
  db.getPrizeById(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})
// GET /prize/:prizeId/books - [{ name:, blurb:, ISBN:, author: { name:, } }, book, book]
router.get('/prize/:prizeId/books', (req, res) => {
  let id = req.params.prizeId
  db.getBooksByPrize(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//resource for book page
// GET /books/:bookId - { name:, blurb:, ISBN:, author: {} }
router.get('/books/:bookId/', (req, res) => {
  let id = req.params.bookId
  db.getBookById(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})
//resource for author page
// GET /authors/:authorId - { name:, books: [{ name:, blurb:, ISBN: }] }
router.get('/authors/:authorId/', (req, res) => {
  let id = req.params.authorId
  db.getAuthorById(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

router.get('/authors/:authorId/books', (req, res) => {
  let id = req.params.authorId
  db.getBooksByAuthor(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//POST /api/v1/addbook
router.post('/addbook', (req, res) => {
  const bookData = req.body[0]
  const authorData = req.body[1]

  db.joinAuthorToBook(bookData, authorData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//POST /api/v1/addtoprize
router.post('/addtoprize', (req, res) => {
  console.log(req.body)
  const bookData = req.body[0]
  const authorData = req.body[1]
  const prizeData = req.body[2]

  db.addBooksToPrizes(bookData, authorData, prizeData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      util.logError(err)
    })
})
module.exports = router
