const dados = require("./dados.json")

const produtos = dados.map((prod) => {
    return {"nome":prod.nome, "preco":prod.preco}
})

const descricao = dados.reduce((acc, prod) =>{
    return acc + prod.preco * prod.quantidade
}, 0)

const acimaDe500 = dados.map((prod) => {
    if(prod.preco > 500){
        return {"nome": prod.nome, "preco": prod.preco}
    }
})

const menosDe5 = dados.map((prod) =>{
    if(prod.quantidade < 5){
        return {"nome": prod.nome, "quantidade": prod.quantidade}
    }
})

const totalProd = dados.reduce((acc,prod) =>{
    return acc + prod.quantidade
}, 0)

const totalEletro = dados.reduce((acc,prod) =>{
    if(prod.categoria === "Eletronico"){
        return acc + prod.categoria
    }
}, 0)

const totalSup10 = dados.reduce((acc,prod) => {
    if(prod.quantidade > 10){
        return acc + prod.quantidade
    }
}, 0)

console.log(totalSup10)