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

async function getPrizeId(prizeName) {
  return await db('prizes').select('id as prize_id').where('name', prizeName)
}

async function addAuthor(authorData) {
  return await db('authors')
    .insert(authorData)
    .returning('id')
    .then((result) => {
      console.log(`Author data: ${result[0].id}`)
      return result[0].id
    })
}

async function addBook(bookData) {
  return await db('books')
    .insert(bookData)
    .returning('id')
    .then((result) => {
      console.log(`Book data: ${result[0].id}`)
      return result[0].id
    })
}

function addPrize(data) {
  const { name, country, about, link, genre } = data
  return db('prizes').insert({ name, country, about, link, genre })
}

async function addBooksToPrizes(authorData, bookData, prizeData) {
  const { name, bio, image } = authorData
  const { title, blurb, cover_image, pub_year, genre } = bookData
  const { prize_name, year, winner, shortlisted, longlisted } = prizeData

  const author_id = await addAuthor(authorData)
  const book_id = await addBook(bookData)
  const prize_id = await getPrizeId(prizeData.prize_name)
  const prize_info = {
    ...prizeData,
    prize_id: prize_id[0].prize_id,
    author_id: author_id,
    book_id: book_id,
  }
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
