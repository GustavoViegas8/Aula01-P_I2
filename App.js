const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Teste01', (req, res) => {
    res.send('<h1>Bem-vindo... Primeiro Teste!</h1>')
})

/*Nodemon pacote que reinicializa automaticamente o servidor interno sempre que os arquivos
forem alterados*/
app.get('/Teste02', (req, res) => {
    res.send('<h1>Teste do Nodemon!</h1>')
})


app.listen(port, () => {
  console.log(`Servidor Rodando -> http://localhost:${port}`)
})