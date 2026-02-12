let inputtarefa = document.getElementById("inputtarefa")
let addbotao = document.getElementById("addbotao")
let itemlista = document.getElementById("itemlista")
let lista = document.getElementById("Lista")

addbotao.addEventeListener("click", add_tarefa)

function add_tarefa(){
    let novo_item = inputtarefa.value.trim();

    // if (novo_item !== "") {
        
        let novoitem = document.createElement("li")

        novoitem.innerHTML = novo_item

        lista.appendChild(novoitem)
    
        inputtarefa.value = "";


    // }

}