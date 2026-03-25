function cadastrar() {
    let nome = document.getElementById("nome")
    let preco = document.getElementById("preco")
    let quantidade = document.getElementById("quantidade")
    let botao = document.createElement("botao")
    let div = document.createElement("div")
    let span = document.createElement("span")

    div.classList.add('item')
    nome.appendChild(div)
    div.classList.add('ganho')
    preco.appendChild(div)
    div.classList.add('unidade')
    quantidade.appendChild(div)

    span.innerHTML = input
    botao.textContent = "Deletar"

    div.appendChild(span)

    botao.classList.add("delete-btn")
    div.appendChild(botao)
    
    botao.addEventListener("click", () => {
        botao.parentElement.remove()
    })
}
