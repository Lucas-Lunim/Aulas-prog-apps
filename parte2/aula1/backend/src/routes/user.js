import express, { response, Router } from 'express'
import routes from './routes.js';

const router = express.Router();
const users = ["Diego", "Felipe", "Cayque", "Henrique"]

router
    .get('/users', (req, res) => {
        res.send(users)
    })
    .post('/register', (req, res) => {
        const { name, lastname } = req.body 
        try{
            users.push({name, lastname})
            return res.status(200).send({response: `Usuário ${name} ${lastname} resgistrado com sucesso!`})
        }
        catch{
            return res.status(500).send({error : "Internal server error"})
        }
    })
    .put('/atualizar/:id', (req, res) => {
        const { name, lastname } = req
    })

    .delete('/deletar/:id', (req, res) =>{

    })
export default router
