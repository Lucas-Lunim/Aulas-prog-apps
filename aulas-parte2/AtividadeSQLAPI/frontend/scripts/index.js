let data = []
const server = "http://localhost:8080"
const form = document.getElementById('formulario')

async function fetchData() {
    const response = await fetch(`${server}/storage/storage`)
    data = await response.json()
}

function setTableData() {
    const table = document.getElementById('table-data');

    table.innerHTML = ""

    data.forEach((e) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
        `;

        table.appendChild(tr);
    });
}


form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const nome_peca = document.getElementById('nome_peca').value
    const codigo_peca = document.getElementById('codigo_peca').value
    const fornecedor = document.getElementById('fornecedor').value
    const quantidade = document.getElementById('quantidade').value
    const preco_unitario = document.getElementById('preco_unitario').value
    const estoque = document.getElementById('estoque').value

    const dataToSend = {
        name: nome_peca,
        code: codigo_peca,
        supplier: fornecedor,
        qty: Number(quantidade),
        price: Number(preco_unitario),
        stock: Number(estoque)
    }

    console.log(dataToSend)
  
        await fetch(`${server}/storage/registerSt`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

        await fetchData()
        setTableData()
    
})


addEventListener('load', async() => {
    fetchData();
    await setTableData();
})

window.onload = setTableData()