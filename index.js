const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao.js')

conexao.connect(erro => {
  if(erro) {
    console.log(erro)
  }else{
    console.log('Conectado com sucesso!')
  }
})
const app = customExpress()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))