function somar(){
    let num1 = Number(document.getElementById("n1").value)
    let num2 = Number(document.querySelector("#n2").value)

    let resposta  = document.querySelector("#resposta")

    let soma = num1 + num2

    resposta.innerHTML = soma
}

function alterar_imagem(){
    let imagem = document.getElementById('imagem')

    if (imagem.src ==
        "https://i.pinimg.com/736x/05/4b/df/054bdf1e70b87a9af6a3a17d5018c940.jpg"       
    )
    {
        imagem.setAttribute("src", "https://static.wikia.nocookie.net/8fcf9c2b-ff03-4093-9d6d-873a4090d1fa")
    }
    else{
        imagem.setAttribute('src', "https://i.pinimg.com/736x/05/4b/df/054bdf1e70b87a9af6a3a17d5018c940.jpg")
    }
}