const express = require('express')
const server = express()
const path = require('path')

const bodyParser = require('body-parser')
console.log('Database_URL', process.env.DATABASE_URL)

server.use(express.json())
server.use(bodyParser.json())
// static assets (js, css, favicon, html)
server.use(express.static(path.join(__dirname, '/build')))
// api routes
server.use('/api/v1', require('./routes'))
// express.static(path_join(__dirname, '/client/build'))

// if route don't match, give them the index.html, and let client side routing try
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})
module.exports = server
