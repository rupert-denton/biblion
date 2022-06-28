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
