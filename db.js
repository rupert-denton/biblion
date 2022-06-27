const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getAllBooks() {
  return db('books').select()
}

function getBooksByAuthor(name) {
  // console.log(`This is the id: ${id}`)
  return db('authors')
    .select('id')
    .where({ name })
    .then((result) => {
      const authorId = result[0].id
      return db('authorbooks').join('books', 'books.author', authorId).select()
    })
}

function getAllPrizes() {
  return db('prizes').select()
}

function getBooksByPrize(name) {
  return db('prizes')
    .select('id')
    .where({ name })
    .then((result) => {
      const prize_id = result[0].id
      return db('booksprizes')
        .join('books', 'booksprizes.book_id', 'books.id')
        .join('authors', 'booksprizes.author_id', 'authors.id')
        .select()
        .where('booksprizes.prize_id', prize_id)
    })
}

function getBooksAndPrizes() {
  return db('booksprizes')
    .join('books', 'booksprizes.book_id', 'books.id')
    .join('authors', 'booksprizes.author_id', 'authors.id')
    .join('prizes', 'booksprizes.prize_id', 'prizes.id')
    .select('*', 'authors.name as author_name', 'prizes.name as prize_name') //stop this weird thing
}

function addPrize(data) {
  const { name, country, about, link, genre } = data
  return db('prizes').insert({ name, country, about, link, genre })
}

function addBooksToPrizes(data) {
  const { name, year, title, author, winner, shortlisted, longlisted } = data
}

module.exports = {
  db,
  getAllBooks,
  getBooksByAuthor,
  getBooksAndPrizes,
  getBooksByPrize,
  getAllPrizes,
  addPrize,
  addBooksToPrizes,
}
