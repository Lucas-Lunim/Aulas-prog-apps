let inputtarefa = document.getElementById("inputtarefa")
let addbotao = document.getElementById("addbotao")
let itemlista = document.getElementById("itemlista")

addbotao.addEventeListener("click", add_tarefa)

function add_tarefa(){
    novo_item = inputtarefa.value.trim();

    if (novo_item !== "") {
        
        lista = document.createElement("lis");
    
        lista.textcontent = novo_item;
    
        itemlista.appendChild("lista");
    
        inputtarefa.value = "";

    }

}