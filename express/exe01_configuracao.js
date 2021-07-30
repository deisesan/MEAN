const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Index</h1>')
})

app.all('/teste', function(req, res) {
  res.send('<h1>Teste</h1>')
})

app.get(/api/, function(req, res) {
  res.send('<h1>API</h1>')
})

app.listen(3000, () => console.log('Executando...'))
