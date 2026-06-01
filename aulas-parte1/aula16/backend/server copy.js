const express = require("express");
const mysql = require("mysql2")
const cors = require("cors")
const app = express();
const port = 8080;

app.use(express.json())
app.use(cors({
    origin: "*"
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    database: "aula_add2",
    port: 3306

})


if(connection){
    console.log("banco de dados conectado")
}
// console.log(connection)

app.get("/", (req, res) => {
    return res.send("Servidor funcionando corretamente!")
})

// app.get("usuarios", async (req, res) =>{
//     const [result] = await connection.query("SELECT * FROM usuarios")
//     res.status(200).send({usuarios: result}) 
// })

app.get("/usuarios", (req, res)=>{
    connection.query("SELECT * FROM usuarios", (err, result) =>{
        if (err){
            return
        }
        res.status(200).send({ usuario: result})
    })
})

app.get("/usuarios/:id", (req, res) =>{
    const { id } = req.params
    connection.query("SELECT * FROM usuarios WHERE id = ?",[id], (err, results) =>{
        if(err){
            return
        }
        return res.status(200).send(results[0])
    })
})

app.post("/registro", (req, res) =>{
    const {nome , email, senha} = req.body
    connection.query("INSERT INTO usuarios VALUES (default,?,?,?)",
        [nome, email, senha]
    )
    res.status(201).send({response: "Usuario Registrado com sucesso!"})
})

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})