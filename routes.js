const express = require('express')
const db = require('./db')
const util = require('./helpers')
const router = express.Router()

// resources

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

router.get('/prizeyears/:prizeId', (req, res) => {
  let id = req.params.prizeId
  db.getPrizeYears(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//resource for prize page
// GET /prizes/:prizeId - information about the prize

router.get('/prize/:year/:prizeId/books', (req, res) => {
  let id = req.params.prizeId
  let year = req.params.year
  db.getBooksByPrizeAndYear(id, year)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

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

// GET /prize/:prizeId/books - [{ name:, blurb:, ISBN:, author: { name:, } }, book, book]

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
router.get('/authors', (req, res) => {
  db.getAllAuthors()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

router.get('/authors/:authorId', (req, res) => {
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

router.get('/authors/:authorId/:bookId/otherbooks', (req, res) => {
  let author_id = req.params.authorId
  let book_id = req.params.bookId
  db.getOtherBooksByAuthor(author_id, book_id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//GET get all books
router.get('/books', (req, res) => {
  db.getAllBooks()
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

router.post('/addprize', (req, res) => {
  const prizeData = req.body
  db.addurnData(prizeData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      util.logError(err)
    })
})

//POST /api/v1/addtoprize
router.post('/addtoprize', (req, res) => {
  const bookData = req.body[0]
  const authorData = req.body[1]
  const prizeData = req.body[2]

  db.addBooksToPrizes(bookData, authorData, prizeData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log(err)
      util.logError(err)
    })
})

router.post('/addlist', (req, res) => {
  const listData = req.body
  db.addurnData(listData)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      util.logError(err)
    })
})

router.post('/addbooktolist', (req, res) => {
  db.addBookToList(req.body)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      util.logError(err)
    })
})

router.get('/lists', (req, res) => {
  db.getAllLists()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

router.get('/listswithbooks', (req, res) => {
  db.getAllListsWithBooks()
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

router.get('/lists/:listId/books', (req, res) => {
  let id = req.params.listId
  db.getBooksByList(id)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      util.logError(err)
    })
})

// DELETE /api/delete/:id
router.post('/delete', (req, res) => {
  const id = Number(req.body.id)
  const dataType = req.body.dataType

  db.deleteData(id, dataType)
    .then(() => {
      res.sendStatus(204)
    })
    .catch((err) => {
      util.logError(err)
    })
})

module.exports = router
