const pedido = [
    {cliente: "joão",
    itens: [
        {nome: "banana", price: 100},
        {nome:"goiaba", price: 7},
        {nome: "arroz", price: 25}
    ],
    statusP: "entregue",
    total: ""}
]

export const getPedido = (req, res) => {
    res.status(200).send(pedido)
}

export const createPedido = (req, res) => {
    const {cliente, itens, statusP, total} = req.body;
    try{
        pedido.push({cliente, itens, statusP, total:totalOrder()})
        return res.status(200).send({ response: "Pedido resgistrado!"})
    }
    catch{
        res.status(500).send({ response: "Erro ao criar"})
    }
}

export const updatePedido = (req, res) => {
    const {cliente, itens, statusP, total} = req.body;
    const { id } = req.params
    try{
        pedido[id].cliente = cliente
        pedido[id].itens = itens
        pedido[id].statusP = statusP
        pedido[id].total = total
        return res.status(200).send({response: "User atualizado com sucesso!"})
    }
    catch{
        res.status(500).send({response: "Erro ao atualizar"})
    }
}

export const deletePedido = (req, res) => {
    const {id}= req.params

    try{
        pedido.splice(id,1)
        return res.status(200).send({response: "User deletado com sucesso!"})
    }
    catch{
        res.status(500).send({response: "Erro ao deletar"})
    }
}

function totalOrder(){
    pedido.total = pedido.itens.reduce((acc, itens)=> 
        acc + itens.price, 0);
        return pedido;
}