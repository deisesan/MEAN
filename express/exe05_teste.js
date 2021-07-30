const express = require('express')
const app = express()
const router = require('./exe05_router')

app.use('/api', router)

app.listen(3000, () => console.log('Executando...'))
