const express = require('express')
const app = express()
const port = 3000

//Middleware que ajusta o formato dos dados do Formulario em HTML
//app.use(express.urlencoded({extended: true}))

//Middleware que ajusta o formato dos dados recebidos por json
app.use(express.json())

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

//post: inclusão de dados
app.post('/', (req, res) => {
  const nome = req.body.nome
  const idade = req.body.idade

  //res.send(`<h3>Recebido Nome: ${nome} e Idade: ${idade} com sucesso!</h3>`)
  res.json({ok: 1, msg: `Recebido ${nome} e idade ${idade} com sucesso!`})
})

//put: alteração de dados
app.put('/:id', (req, res) => {
  const id = req.params.id
  res.json({ok: 1, msg: `Aluno ${id} alterado.`})
})

//delete: exlusão de dados
app.delete('/:id', (req, res) => {
  const id = req.params.id
  res.json({ok: 1, msg: `Aluno ${id} expurgado.`})
})

//Listagem de todos os alunos ou de um deles 
//?: indica que o parâmetro é opcional
app.get('/lista/:id?', (req, res) => {
  if(req.params.id) {
    const id = req.params.id
    res.json({ok: 1, msg: `Aluno ${id} encontrado`})
  } else {
    res.json({ok: 1, msg: `Lista de Alunos`})
  }
})

app.listen(port, () => {
  console.log(`Servidor Rodando -> http://localhost:${port}`)
})