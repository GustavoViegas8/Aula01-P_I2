const express = require('express')
const app = express()

//Middleware que ajusta o formato dos dados do Formulario em HTML (receber dados a partir de um formulario)
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
  //const nome = req.body.nome
  //const idade = req.body.idade

  //Desctructor JavaScript
  const {nome, idade} = req.body

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

//Exercício: Rota com 2 parêmetros opcionais
app.get('/Teste03/:par1?/:par2?', (req, res) => {
  if(req.params.par1 && req.params.par2){
    const nome = req.params.par1;
    const id = req.params.par2;
    res.json({ok: 1, msg: `Pesquisa por Nome:${nome} ID:${id}`})

  } else if (req.params.par1){
    const par1 = Number(req.params.par1)
      if(isNaN(par1)) {
        const nome = req.params.par1
        res.json({ok: 1, msg: `Pesquisa pelo nome: ${nome}`})
      } else {
        res.json({ok: 1, msg: `Pesquisa por ID: ${par1}`})
      }
  } else {
    res.json({ok: 1, msg: `Pesquisa sem os parâmetros (Todos os Dados)`})
  }
})

app.listen(3000, () => {
  console.log(`Servidor Rodando -> http://localhost:${3000}`)
})
