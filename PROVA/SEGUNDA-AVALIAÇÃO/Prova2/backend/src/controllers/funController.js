import { response } from "express";
import  connection  from "../database/db.js";

export const getFun = (req, res) => {
    connection.query('SELECT * FROM funcionarios', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}

export const getFunSetor = (req, res) => {
    connection.query('SELECT nome,setor FROM funcionarios', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}


export const createFun = (req, res) => {
    const{nome, sobrenome, setor, funcao} = req.body

    try{
        connection.query('insert into funcionarios (nome, sobrenome, setor, funcao) values (?,?,?,?)',
            [nome, sobrenome, setor, funcao],
            (err, results) => {
                if(err){
                    return res.status(500).send({response: "Ocorreu algum problema durante a inserção."})
                    
                }
                
                return res.status(201).send({response: "Usuário Resgistrado!"})
            }
        )
    }catch{
        return res.status(500).send({response: "Ocorreu algum erro."})
    }
}

export const updateFun = (req, res) => {
    const{nome, sobrenome, setor, funcao} = req.body;
    const{id} = req.params

    try{
        connection.query(
            'update funcionarios set nome = ?, sobrenome = ?, setor = ?, funcao =? where id = ?',
            [nome, sobrenome, setor, funcao, id]
        )
        return res.status(200).send({response:"Usuário foi atualizado!"})
    }catch{
        return res.status(500).send({response: "Ocorreu ao atualizar."})
    }
}

export const deleteFun = (req, res) =>{
    const{id} = req.params

    try{
        connection.query('delete from funcionarios where id = ?', [id])
        return res.status(200).send({response: "Usuário foi deletado!"})
    }catch{
        return res.status(500).send({response: "Ocorreu ao deletar."})
    }
}