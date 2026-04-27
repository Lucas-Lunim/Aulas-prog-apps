const form = document.getElementById("form")
const formatt = document.getElementById("formatt")

window.onload = () => {
    carregarUsuarios();
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const response = await fetch("http://localhost:8080/registro", {
        method: "POST",
        headers: {  
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json()
    console.log(data)
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("senha").value = ""
    carregarUsuarios();
})

formatt.addEventListener("submit", async (e) => {
    e.preventDefault()
    const id = document.getElementById("idatt").value
    const nome = document.getElementById("nomeatt").value
    const email = document.getElementById("emailatt").value
    const senha = document.getElementById("senhaatt").value

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: "put",
        headers: {  
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json()
    console.log(data)
    document.getElementById("nomeatt").value = ""
    document.getElementById("emailatt").value = ""
    document.getElementById("senhaatt").value = ""
    carregarUsuarios();
})


async function atualizarUsuario(id, nome, email, senha) {
    const idatt = document.getElementById("idatt")
    const nomeatt = document.getElementById("nomeatt")
    const emailatt = document.getElementById("emailatt")
    const senhaatt = document.getElementById("senhaatt")

    idatt.value = id
    nomeatt.value = nome
    emailatt.value = email
    senhaatt.value = senha
 
}

async function carregarUsuarios(){
    const response = await fetch("http://localhost:8080/usuarios");
    const usuarios = await response.json();

    const tbody = document.getElementById("listaUsuarios")

    tbody.innerHTML = ""

    usuarios.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario(${user.id}, '${user.nome}', '${user.email}', '${user.senha}')">Atualizar</button>
            </td>
        `

        tbody.appendChild(tr)
    })
}

async function deletarUsuario(id) {
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: 'DELETE',
    })
    carregarUsuarios();
}

app.delete("/deletar/:id", (req, res)=>{
    const {id} = req.params
    try{
        connection.query("DELETE FROM usuario WHERE id = ?",[id])
        return res.status(200).send({message: "Usuário deletado com sucesso!"})
    }
    catch(e){
        return res.status(500).send({error:e})
    }
})