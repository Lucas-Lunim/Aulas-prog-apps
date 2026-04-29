const form = document.getElementById("form")
const formatt = document.getElementById("formatt")

window.onload = () => {
    carregarrestaurante();
}
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const produto = document.getElementById("produto").value
    const categoria = document.getElementById("categoria").value
    const quantidade = document.getElementById("quantidade")
    const preco = document.getElementById("preco").value
    const valor_total = document.getElementById("valor_total").value
    const data_venda = document.getElementById("data_venda").value
    const forma_pagamento = document.getElementById("forma_pagamento").value
    const nome_vendedor = document.getElementById("nome_vendedor").value

    const response = await fetch("http://localhost:8080/registro", {
        method: "POST",
        headers: {  
            "content-type": "application/json"
        },
        body: JSON.stringify({
            produto: produto,
            categoria: categoria,
            quantidade: quantidade,
            preco: preco,
            valor_total: valor_total,
            data_venda: data_venda,
            forma_pagamento: forma_pagamento,
            nome_vendedor: nome_vendedor
        })
    })

    const data = await response.json()
    console.log(data)
    document.getElementById("produto").value = ""
    document.getElementById("categoria").value = ""
    document.getElementById("quantidade").value = ""
    document.getElementById("preco").value = ""
    document.getElementById("valor_total").value = ""
    document.getElementById("data_venda").value = ""
    document.getElementById("forma_pagamento").value = ""
    document.getElementById("nome_vendedor").value = ""
    carregarrestaurante();
})

formatt.addEventListener("submit", async (e) => {
    e.preventDefault()
    const id = document.getElementById("idatt").value
    const produtoatt = document.getElementById("produtoatt").value
    const categoriaatt = document.getElementById("categoriaatt").value
    const quantidadeatt = document.getElementById("quantidadeatt")
    const precoatt = document.getElementById("precoatt").value
    const valor_totalatt = document.getElementById("valor_totalatt").value
    const data_vendaatt = document.getElementById("data_vendaatt").value
    const forma_pagamentoatt = document.getElementById("forma_pagamentoatt").value
    const nome_vendedoratt = document.getElementById("nome_vendedoratt").value

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: "put",
        headers: {  
            "content-type": "application/json"
        },
        body: JSON.stringify({
            produto: produto,
            categoria: categoria,
            quantidade: quantidade,
            preco: preco,
            valor_total: valor_total,
            data_venda: data_venda,
            forma_pagamento: forma_pagamento,
            nome_vendedor: nome_vendedor
        })
    })

    const data = await response.json()
    console.log(data)
    document.getElementById("produtoatt").value = ""
    document.getElementById("categoriaatt").value = ""
    document.getElementById("quantidadeatt").value = ""
    document.getElementById("precoatt").value = ""
    document.getElementById("valor_totalatt").value = ""
    document.getElementById("data_vendaatt").value = ""
    document.getElementById("forma_pagamentoatt").value = ""
    document.getElementById("nome_vendedoratt").value = ""
    carregarrestaurante();
})


async function atualizarrestaurante(id, produto, categoria, quantidade, preco, valor_total, data_venda, forma_pagamento, nome_vendedor) {
    
    const idatt = document.getElementById("idatt")
    const produtoatt = document.getElementById("produtoatt")
    const categoriaatt = document.getElementById("categoriaatt")
    const quantidadeatt = document.getElementById("quantidadeatt")
    const precoatt = document.getElementById("precoatt")
    const valor_totalatt = document.getElementById("valor_totalatt")
    const data_vendaatt = document.getElementById("data_vendaatt")
    const forma_pagamentoatt = document.getElementById("forma_pagamentoatt")
    const nome_vendedoratt = document.getElementById("nome_vendedoratt")

    idatt.value = id
    produtoatt.value = produto  
    categoriaatt.value = categoria
    quantidadeatt.value = quantidade
    precoatt.value = preco
    valor_totalatt.value = valor_total
    data_vendaatt.value = data_venda
    forma_pagamentoatt.value = forma_pagamento
    nome_vendedoratt.value = nome_vendedor
 
}

async function carregarrestaurante(){
    const response = await fetch("http://localhost:8080/restaurante");
    const restaurante = await response.json();

    const tbody = document.getElementById("listarestaurante")

    tbody.innerHTML = ""

    restaurante.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.produto}</td>
            <td>${user.categoria}</td>
            <td>${user.quantidade}</td>
            <td>${user.preco}</td>
            <td>${user.valor_total}</td>
            <td>${user.data_venda}</td>
            <td>${user.forma_pagamento}</td>
            <td>${user.nome_vendedor}</td>
            <td>
                <button onclick="deletarrestaurante(${user.id})">Deletar</button>
                <button onclick="atualizarrestaurante(${user.id}, '${user.produto}', '${user.categoria}', '${user.quantidade}',
                '${user.preco}','${user.valor_total}','${user.data_venda}','${user.forma_pagamento}','${user.nome_vendedor}')">Atualizar</button>
            </td>
        `

        tbody.appendChild(tr)
    })
}

async function deletarrestaurante(id) {
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: 'DELETE',
    })
    carregarrestaurante();
}
