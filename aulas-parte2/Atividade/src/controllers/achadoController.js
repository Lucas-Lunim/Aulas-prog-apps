import { response } from "express";
import  connection  from "../database/db.js";

export const getAchados = (req, res) => {
    connection.query('SELECT * FROM objeto', (err, results) => {
        if(err){
            return res.status(500).send({response: "Ocorreu algum erro"})
        }
        return res.status(200).send(results)
    })
}


export const createAchados = (req, res) => {
    const{item, descricao, local_obj, data_obj, status_obj} = req.body

    try{
        connection.query('insert into estoque (item, descricao, local_obj, data_obj, status_obj) values (?,?,?,?,?)',
            [item, descricao, local_obj, data_obj, status_obj],
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

export const updateAchados = (req, res) => {
    const{item, descricao, local_obj, data_obj, status_obj} = req.body;
    const{id_objeto} = req.params

    try{
        connection.query(
            'update objeto set item = ?, descricao = ?, local_obj = ?, data_obj = ?, status_obj = ?',
            [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque, id_objeto]
        )
        return res.status(200).send({response:"Item foi atualizado!"})
    }catch{
        return res.status(500).send({response: "Ocorreu ao atualizar."})
    }
}

export const deleteAchados = (req, res) =>{
    const{id_objeto} = req.params

    try{
        connection.query('delete from objeto where id_objeto = ?', [id_objeto])
        return res.status(200).send({response: "Item foi deletado!"})
    }catch{
        return res.status(500).send({response: "Ocorreu ao deletar."})
    }
}