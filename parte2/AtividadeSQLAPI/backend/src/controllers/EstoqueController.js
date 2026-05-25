import { response } from "express";
import  connection  from "../database/db.js";

export const getStorage = (req, res) => {
    connection.query('SELECT * FROM estoque', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}


export const createStorage = (req, res) => {
    const{nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario,estoque} = req.body

    try{
        connection.query('insert into estoque (nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario,estoque) values (?,?,?,?,?,?)',
            [nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario,estoque],
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

export const updateStorage = (req, res) => {
    const{nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario,estoque} = req.body;
    const{id} = req.params

    try{
        connection.query(
            'update estoque set nome_peca = ?, codigo_peca = ?, fornecedor = ?, quantidade = ?, preco_unitario = ?, estoque = ? where id = ?',
            [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque, id]
        )
        return res.status(200).send({response:"Usuário foi atualizado!"})
    }catch{
        return res.status(500).send({response: "Ocorreu ao atualizar."})
    }
}

export const deleteStorage = (req, res) =>{
    const{id} = req.params

    try{
        connection.query('delete from estoque where id = ?', [id])
        return res.status(200).send({response: "Usuário foi deletado!"})
    }catch{
        return res.status(500).send({response: "Ocorreu ao deletar."})
    }
}