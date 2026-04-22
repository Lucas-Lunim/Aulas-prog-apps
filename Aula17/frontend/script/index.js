const form = document.getElementById("form")

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
    carregarUsuarios();
})

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
        `

        tbody.appendChild(tr)
    })
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