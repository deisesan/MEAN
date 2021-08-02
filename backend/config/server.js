const bodyParser = require('body-parser')
const express = require('express')
const app = express()

const port = 3003

app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json())

app.listen(port, function(){
  console.log(`Conectado na porta ${port}.`)
})