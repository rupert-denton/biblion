const request = require('superagent')
const url = '/api/v1/'

export function getAllPrizes() {
  return request
    .get(url)
    .then((response) => {
      const prizes = response.body
      return prizes
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getAllBooks() {
  return request
    .get(`${url}books`)
    .then((response) => {
      const books = response.body
      return books
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getAllAuthors() {
  return request
    .get(`${url}authors`)
    .then((response) => {
      const authors = response.body
      return authors
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getPrizeById(id) {
  return request
    .get(`${url}prize/${id}`)
    .then((response) => {
      const prizeInfo = response.body
      return prizeInfo
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getBooksByPrize(id) {
  return request
    .get(`${url}prize/${id}/books`)
    .then((response) => {
      const prizeBooks = response.body
      return prizeBooks
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getBooksByPrizeAndYear(id, year) {
  console.log('Hello!')
  return request
    .get(`${url}prize/${year}/${id}/books`)
    .then((response) => {
      const prizeBooks = response.body
      return prizeBooks
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getPrizeYears(id) {
  console.log(id)
  return request
    .get(`${url}prizeyears/${id}`)
    .then((response) => {
      const prizeYears = response.body
      return prizeYears
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getBooksOnListById(id) {
  console.log('Running Function')
  return request
    .get(`${url}lists/${id}/books`)
    .then((response) => {
      const lists = response.body
      return lists
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getBookById(id) {
  return request
    .get(`${url}books/${id}`)
    .then((response) => {
      const bookInfo = response.body
      return bookInfo
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getAuthorById(id) {
  return request
    .get(`${url}authors/${id}`)
    .then((response) => {
      const authorInfo = response.body
      return authorInfo
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getBooksByAuthor(id) {
  return request
    .get(`${url}authors/${id}/books`)
    .then((response) => {
      const books = response.body
      return books
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getAllLists() {
  return request
    .get(`${url}lists`)
    .then((response) => {
      const lists = response.body
      return lists
    })
    .catch((err) => {
      console.log(err)
    })
}

export function getListsWithBooks() {
  return request
    .get(`${url}listswithbooks`)
    .then((response) => {
      const lists = response.body
      return lists
    })
    .catch((err) => {
      console.log(err)
    })
}

// posts
export function postNewPrize(data) {
  console.log(data)
  return request
    .post(`${url}addprize`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('Successfully posted' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

//work on this
export function postBookWithAuthor(data) {
  console.log(data)
  return request
    .post(`${url}addbook`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('yay got ' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

export function postBooksToPrize(data) {
  return request
    .post(`${url}addtoprize`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('yay got ' + JSON.stringify(response))
    })
    .catch((err) => {
      console.log(err)
    })
}

export function postNewList(data) {
  console.log(data)
  return request
    .post(`${url}addlist`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('Successfully posted' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

export function postBooksToList(data) {
  console.log(data)
  return request
    .post(`${url}addbooktolist`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('yay got ' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}
