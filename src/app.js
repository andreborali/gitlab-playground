const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log(`Requisição ${req.method} no ${req.url}`)
    res.send('Aplicação em execução!')
})

app.listen('3000', _ => {
    console.log('Iniciando servidor na porta 3000')
})
