import { response } from "express";

export function ValidateRegisterU(req,res,next){
    const {name,email, password} = req.body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!name || name.length < 3 || name.trim() == ''){
        return res.status(400).send({response: "Revise os dados!"})
    }
    if(!emailRegex.test(email)){
        return res.status(400).send({response: "Email incorreto"})
    }

    next();
}

export const ValidateUpdate = (req, res, next) => {
    const { id } = req.params

    connection.query('SELECT * FROM user where id = ?'),
        [id],
        (err, results) => {
            if(err){
                return res.status(404).send({response: "Este usúario não foi encontrado"})
            }
            if(results){
                next();
            }
        }
}