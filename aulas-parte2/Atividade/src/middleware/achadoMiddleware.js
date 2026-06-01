import { response } from "express";
import  connection  from "../database/db.js";

export function validateObjeto(req, res, next) {
    const {item, descricao, local_obj, data_obj, status_obj} = req.body


    if(!item.trim()) {
        return res.status(400).send({
            response : "No code provided"
        })
    }


    if(!descricao.trim()) {
        return res.status(400).send({
            response : "No descricao provided"
        })
    }


    if(!local_obj.trim()) {
        return res.status(400).send({
            response : "No localEncontrado provided"
        })
    }


    if(!data_obj.trim()) {
        return res.status(400).send({
            response : "No data_obj provided"
        })
    }


    const [ano, mes, dia] = data_obj.split('-').map(Number);


    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();
    const dataInformada = new Date(ano, mes - 1, dia);
    const dataHoje = new Date(anoAtual, mesAtual - 1, diaAtual);


    if (dataInformada > dataHoje) {
        return res.status(400).send({
            response: "The data_obj cannot be a future date"
        });
    }
   
    if(!statusObjeto.trim()) {
        return res.status(400).send({
            status_obj : "No statusObjeto provided"
        })
    }


    next()
}
