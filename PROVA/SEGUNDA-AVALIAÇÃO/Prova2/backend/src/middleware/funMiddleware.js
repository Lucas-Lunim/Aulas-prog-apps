import { response } from "express";
import  connection  from "../database/db.js";

export function validateCreateFun(req,res,next){
    const {nome, sobrenome, setor, funcao} = req.body

    if(!nome ){
        return res.status(400).send({response: "Revise o nome!"})
    }
    if(!sobrenome){
        return res.status(400).send({response: "Revise o sobrenome!"})
    }
    if(!setor){
        return res.status(400).send({response: "Revise o setor!"})
    }
    if(!funcao){
        return res.status(400).send({response: "Revise a funcao!"})
    }
    next();
}

export function validateUpdateFun(req,res,next){
    const {nome, sobrenome, setor, funcao} = req.body
    const {id} = req.params

    if(!id){
        return res.status(400).send({response: "Revise o ID!"})
    }
    next();
}

export function validateDeleteFun(req,res,next){
    const {id} = req.params

    if(!id){
        return res.status(400).send({response: "Revise o ID!"})
    }
    next();
}

