const request = require('superagent')
const url = '/api/v1/'

export function getAllPrizes() {
  return request
    .get(url)
    .then((response) => {
      const prizes = response.body
      console.log(prizes)
    })
    .catch((err) => {
      console.log(err)
    })
}

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

// .post('/api/pet')
//        .send({ name: 'Manny', species: 'cat' })
//        .set('X-API-Key', 'foobar')
//        .set('Accept', 'application/json')
//        .then(res => {
//           alert('yay got ' + JSON.stringify(res.body));
//        });
