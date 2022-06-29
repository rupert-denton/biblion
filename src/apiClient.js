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

// posts
export function postBookWithAuthor(data) {
  console.log(data)
  return request
    .post(url)
    .set({ data })
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('yay got ' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

export function postBooksToPrize(data) {
  console.log(data)
  return request
    .post(`${url}addtoprize`)
    .set({ data })
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('yay got ' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

// .post('/api/pet')
//        .send({ name: 'Manny', species: 'cat' })
//        .set('X-API-Key', 'foobar')
//        .set('Accept', 'application/json')
//        .then(res => {
//           alert('yay got ' + JSON.stringify(res.body));
//        });
