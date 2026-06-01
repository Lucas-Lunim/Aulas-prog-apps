// let inputtarefa = document.getElementById("inputtarefa")
// let addbotao = document.getElementById("addbotao")
// let lista = document.getElementById("Lista")

// addbotao.addEventListener("click", add_tarefa)

// function add_tarefa(){
//     let novo_item = inputtarefa.value.trim();

//     if (novo_item !== "") {
        
//         let novoitem = document.createElement("li")

//         novoitem.innerHTML = novo_item

//         lista.appendChild(novoitem)
    
//         inputtarefa.value = "";

//     }

// }

// botaoexcluir = document.querySelector("Excluir")

// botaoexcluir.addEventListener("click", function(){
//     novo_item = this.parentElement;
//     novo_item.remove();

// })

// Correção

let btn_enviar = document.getElementById("enviar")

function cadastrar(){
    console.log("AISISISISI")

    let lista = document.getElementById("lista")
    let div = document.createElement("div")
    let button = document.createElement("button")
    let span = document.createElement("span")
    let input = document.getElementById("input").value
    
    div.classList.add("item")
    lista.appendChild(div)

    span.innerHTML = input
    button.textContent = "Deletar"

    div.appendChild(span)
    div.appendChild(button)

    button.addEventListener("click", () => {
        button.parentElement.remove()
    })
}

btn_enviar.addEventListener("click", cadastrar)
