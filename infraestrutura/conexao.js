const mysql = require('mysql')

const conexao = mysql.crateConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'agenda-petshop'
})

module.exports = conexao