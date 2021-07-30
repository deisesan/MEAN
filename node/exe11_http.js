const http = require('http')
const porta = 3456

const server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  res.end('<h1>Ola Mundo!</h1>')
})

server.listen(porta, function() {
  console.log(`Escutando a ${porta}`)
})
