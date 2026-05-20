import { response } from "express";

export function validateCreatePeca(req,res,next){
    const {nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario,estoque} = req.body

    if(!nome_peca || namo_peca.length < 3 || nome_peca.trim() == ''){
        return res.status(400).send({response: "Revise o nome!"})
    }
    if(!codigo_peca){
        return res.status(400).send({response: "Revise o código!"})
    }
    if(!fornecedor){
        return res.status(400).send({response: "Revise o fornecedor!"})
    }
    if(quantidade !== "Number" || quantidade <= 0){
        return res.status(400).send({response: "Revise a quantidade!"})
    }
    if(preco_unitario !== "Number" || preco_unitario < 0){
        return res.status(400).send({response: "Revise o preço!"})
    }
    if(estoque !== "Number" || estoque <= 0){
        return res.status(400).send({response: "Revise o estoque!"})
    }
    next();
}

export function validateGetPecaById(req,res,next){
    const {id} = req.body

    if(!id || id !== "Number"){
        return res.status(400).send({response: "Revise o ID!"})
    }
    next();
}

export function validateUpdatePeca(req,res,next){
    const {nome_peca,codigo_peca,fornecedor,quantidade,preco_unitario,estoque} = req.body
    const {id} = req.body

    if(!id || id !== "Number"){
        return res.status(400).send({response: "Revise o ID!"})
    }
    if(quantidade !== "Number" || quantidade <= 0){
        return res.status(400).send({response: "Revise a quantidade!"})
    }
    if(estoque !== "Number" || estoque <= 0){
        return res.status(400).send({response: "Revise o estoque!"})
    }    
    if(preco_unitario !== "Number" || preco_unitario < 0){
        return res.status(400).send({response: "Revise o preço!"})
    }
    next();
}

export function validateDeletePeca(req,res,next){
    const {id} = req.body

    if(!id || id !== "Number"){
        return res.status(400).send({response: "Revise o ID!"})
    }
    next();
}

// export function ValidateRegister(req,res,next){
//     const {name,email, password} = req.body

//     if(!name || name.length < 3 || name.trim() == ''){
//         return res.status(400).send({response: "Revise os dados!"})
//     }

//     next();
// }