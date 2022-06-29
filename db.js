const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getAllBooks() {
  return db('books').select()
}

function getBooksByAuthor(id) {
  return db('authors')
    .select()
    .first()
    .where({ id })
    .then((result) => {
      return db('authorbooks').join('books', 'books.author', result.id).select()
    })
}

function getAllPrizes() {
  return db('prizes').select()
}

function getBooksByPrize(id) {
  return db('prizes')
    .select()
    .first()
    .where({ id })
    .then((result) => {
      return db('booksprizes')
        .join('books', 'booksprizes.book_id', 'books.id')
        .join('authors', 'booksprizes.author_id', 'authors.id')
        .select()
        .where('booksprizes.prize_id', id)
    })
}

function getBookById(id) {
  return db('books').select().where({ id })
}

function getAuthorById(id) {
  return db('authors').select().where({ id })
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

function checkIfExists(tableName, column, data) {
  return db(tableName)
    .select()
    .first()
    .where(column, data)
    .then((result) => {
      return result === undefined ? false : result.id
    })
}

async function addurnData(data) {
  let swiStatement = Object.keys(data)
  let tableName
  let param
  let column

  switch (swiStatement[1]) {
    case 'bio':
      tableName = 'authors'
      column = 'name'
      param = data.name
      break
    case 'blurb':
      tableName = 'books'
      column = 'title'
      param = data.title
      break
    case 'country':
      tableName = 'prizes'
      column = 'name'
      param = data.name
      break
    default:
      return
  }

  const exists = await checkIfExists(tableName, column, param)
  return exists ? exists : addData(tableName, data)
}

async function addData(tableName, data) {
  return db(tableName)
    .insert(data)
    .returning('id')
    .then((result) => {
      return result[0].id
    })
}

async function joinAuthorToBook(bookData, authorData) {
  const author_id = await addurnData(authorData)
  const completedBookData = {
    ...bookData,
    author: author_id,
  }
  const book_id = await addurnData(completedBookData)

  const author_book = {
    book_id: book_id,
    author_id: author_id,
  }
  return await db('authorbooks').insert(author_book)
}

async function addBooksToPrizes(bookData, authorData, prizeData) {
  console.log(bookData, authorData, prizeData)
  joinAuthorToBook(bookData, authorData)
  const author_id = await addurnData(authorData)
  const book_id = await addurnData(bookData)
  const prize_id = await getPrizeId(prizeData.prize_name)
  const prize_info = {
    ...prizeData,
    prize_id: prize_id[0].prize_id,
    author_id: author_id,
    book_id: book_id,
  }
  console.log(prize_info)

  delete prize_info.prize_name
  return await db('booksprizes').insert(prize_info)
}

module.exports = {
  db,
  getAllBooks,
  getBooksByAuthor,
  getBooksAndPrizes,
  getBooksByPrize,
  getAllPrizes,
  getBookById,
  getAuthorById,
  addBooksToPrizes,
  joinAuthorToBook,
  addurnData,
}
