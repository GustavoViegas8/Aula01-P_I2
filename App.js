const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Aula01', (req, res) => {
    res.send('<h1>Bem-vindo... Teste Dois!</h1>')
})

app.listen(port, () => {
  console.log(`Servidor Rodando -> http://localhost:${port}`)
})