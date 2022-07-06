const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getAllBooks() {
  return db('books').select()
}

function getAllAuthors() {
  return db('authors').select()
}

function getBooksByAuthor(id) {
  console.log(id)
  return db('books').select().where('author', id)
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

function getBooksByPrizeAndYear(id, year) {
  return db('prizes')
    .select()
    .where({ id })
    .then((result) => {
      return db('booksprizes')
        .join('books', 'booksprizes.book_id', 'books.id')
        .join('authors', 'booksprizes.author_id', 'authors.id')
        .select()
        .where('booksprizes.prize_id', id)
        .where('booksprizes.year', year)
    })
}

function getAllLists() {
  return db('lists').select()
}

function getAllListsWithBooks() {
  return db('booklists')
    .join('lists', 'booklists.list_id', 'lists.id')
    .join('books', 'booklists.book_id', 'books.id')
    .join('authors', 'books.author', 'authors.id')
    .select()
}

function getBooksByList(id) {
  return db('booklists')
    .join('books', 'booklists.book_id', 'books.id')
    .join('authors', 'books.author', 'authors.id')
    .select()
    .where('booklists.list_id', id)
}

function getBookById(id) {
  return db('books')
    .join('authors', 'books.author', 'authors.id')
    .where('books.id', id)
    .select('*', 'authors.name as author_name', 'authors.id as author_id')
    .first()
}

function getAuthorById(id) {
  return db('authors').select().where({ id }).first()
}

function getPrizeById(id) {
  return db('prizes').select().where({ id }).first()
}

function getBooksAndPrizes() {
  return db('booksprizes')
    .join('books', 'booksprizes.book_id', 'books.id')
    .join('authors', 'booksprizes.author_id', 'authors.id')
    .join('prizes', 'booksprizes.prize_id', 'prizes.id')
    .select('*', 'authors.name as author_name')
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

  if (swiStatement.includes('bio')) {
    tableName = 'authors'
    column = 'name'
    param = data.name
  } else if (swiStatement.includes('blurb')) {
    tableName = 'books'
    column = 'title'
    param = data.title
  } else if (swiStatement.includes('longlist')) {
    tableName = 'prizes'
    column = 'prize_name'
    param = data.prize_name
  } else if (swiStatement.includes('country')) {
    tableName = 'prizes'
    column = 'prize_name'
    param = data.prize_name
  } else if (swiStatement.includes('list_name')) {
    tableName = 'lists'
    column = 'list_name'
    param = data.list_name
  } else {
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
  console.log(authorData)
  const author_id =
    Object.keys(authorData)[0] === 'author_id'
      ? authorData.author_id
      : await addurnData(authorData)
  console.log(`Author id is: ${author_id}`)

  const completedBookData = {
    ...bookData,
    author: author_id,
  }
  const book_id = await addurnData(completedBookData)

  const authorBook = {
    book_id: book_id,
    author_id: author_id,
  }
  return await db('authorbooks').insert(authorBook)
}

async function addBookToList(bookListObject) {
  return await db('booklists').insert(bookListObject)
}

async function addBooksToPrizes(bookData, authorData, prizeData) {
  await joinAuthorToBook(bookData, authorData)
  const author_id = await addurnData(authorData)
  const book_id = await addurnData(bookData)
  const prize_id = prizeData.prize_id
  const prize_info = {
    ...prizeData,
    prize_id: prize_id,
    author_id: author_id,
    book_id: book_id,
  }

  delete prize_info.prize_name
  return await db('booksprizes').insert(prize_info)
}

function getPrizeYears(prizeId) {
  return db('booksprizes').distinct('year').where('prize_id', prizeId)
}

module.exports = {
  db,
  getAllBooks,
  getAllAuthors,
  getBooksByAuthor,
  getBooksAndPrizes,
  getBooksByPrize,
  getAllPrizes,
  getBookById,
  getAuthorById,
  addBooksToPrizes,
  joinAuthorToBook,
  addurnData,
  getPrizeById,
  addBookToList,
  getAllLists,
  getBooksByList,
  getAllListsWithBooks,
  getBooksByPrizeAndYear,
  getPrizeYears,
}
