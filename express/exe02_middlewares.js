const express = require('express')
const app = express()

app.get('/', function(req, resp, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
})

app.get('/', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>Olá Mundo!</h1>')
})

app.listen(3000, () => console.log('Executando...'))
