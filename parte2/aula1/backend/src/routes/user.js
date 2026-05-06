import express, { response, Router } from 'express'
import { createUser, deleteUser, getPeople, updateUser } from '../controllers/UserController.js'

const router = express.Router();

router
    .get('/users', getPeople)
    .post("/register", createUser)
    .put("/update/:id", updateUser)
    .delete("/delete/:id", deleteUser)


export default router



















//     })
//     .post('/register', (req, res) => {
//         const {name, lastname} = req.body 
//         try{
//             users.push({name, lastname})
//             return res.status(200).send({response: `Usuário ${name} ${lastname} resgistrado com sucesso!`})
//         }
//         catch{
//             return res.status(500).send({error : "Internal server error"})
//         }
//     })
//     .put('/atualizar/:id', (req, res) => {
//         const {name, lastname} = req.body
//         const {id} = req.params

//         if (!users[id]) {
//             return res.status(404).send({error: "Usuário não encontrado"})
//         }

//         users[id] = {name, lastname}

//         res.status(200).send(`User ${id} atualizado`)   
//     })

//     .delete('/deletar/:id', (req, res) =>{
//         const {id} = req.params

//         res.status(200).send(`O user com o id ${id} foi deletado`)
//     })
