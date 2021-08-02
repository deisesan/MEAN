const express = require('express')
const app = express()

app.use('/api', function(req, resp, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
})

// app.use('/api', function(req, resp, next) {
//   console.log('Inicio...')
//   next()
//   console.log('Fim...')
// })

app.use('/api', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>API</h1>')
})

// app.use('/api', function(req, res) {
//   console.log('Resposta...')
//   res.send('<h1>API</h1>')
// })

app.listen(3000, () => console.log('Executando...'))