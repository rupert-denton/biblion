const server = require('./server')
const port = process.env.NODE_ENV || 3001

server.listen(port, () => {
  console.log('listening on', port)
})
