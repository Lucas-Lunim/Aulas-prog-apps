import { response } from "express";

const people = [{name: "Artur"}, {name: "Pedro"}, {name:"Igor"}]


export const getPeople = (req, res) => {
    res.status(200).send(people)
}


export const createUser = (req, res) => {
    const { name } = req.body;
    try{
        people.push({name})
        return res.status(200).send({ response: "Usuário resgistrado!"})
    }
    catch{
        res.status(500).send({ response: "Erro ao registrar"})
    }
}

export const updateUser = (req, res) => {
    const { name } = req.body;
    const { id } = req.params
    try{
        people[id].name = name
        return res.status(200).send({response: "User atualizado com sucesso!"})
    }
    catch{
        res.status(500).send({response: "Erro ao atualizar"})
    }
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    try{
        people.splice(id,1)
        return res.status(200).send({response: "User deletado com sucesso!"})
    }
    catch{
        res.status(500).send({response: "Erro ao deletar"})
    }
}