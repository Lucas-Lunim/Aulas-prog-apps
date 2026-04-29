const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "loja",
    port: 3306
})

if(connection){
    console.log("Banco de dados conectado!")
}

app.get('/', (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

app.get('/restaurante', (req, res) => {
    connection.query("SELECT * FROM restaurante", (err, results) => {
        if(err){
            return
        }
        console.log(results)
        res.status(200).send(results)
    })
})

app.get('/restaurante/:id', (req,res) => {
    const { id } = req.params
    connection.query("SELECT * FROM restaurante WHERE id = ?",
        [id],
        (err, results) => {
            if(err){
                return
            }
            return res.status(200).send(results[0])
    })
})

app.post('/registro', (req, res) => {
    const { produto, categoria, quantidade, preco, valor_total, data_venda, forma_pagamento, nome_vendedor} = req.body
    connection.query("INSERT INTO restaurante (produto, categoria, quantidade, preco, valor_total, data_venda, forma_pagamento, nome_vendedor) VALUES (?,?,?)",
        [produto, categoria, quantidade, preco, valor_total, data_venda, forma_pagamento, nome_vendedor]
    )
    
    return res.status(201).send({ response: "Compra registrada com sucesso!"})
})



app.delete("/deletar/:id", (req, res) => {
    const {id} = req.params
    try{
        connection.query("DELETE FROM restaurante WHERE id = ?", [id])
        return res.status(200).send({message: "Compra deletado com sucesso!"})
    }
    catch(e){
        return res.status(500).send({error:e})
    }
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})