const express = require('express')
const app = express()

app.route('/clientes')
  .get((req, res) => res.send('Lista de Clientes'))
  .post((req, res) => res.send('Novo Cliente'))
  .put((req, res) => res.send('Alterar Cliente'))
  .delete((req, res) => res.send('Remove Cliente'))

app.listen(3000, () => console.log('Executando...'))
