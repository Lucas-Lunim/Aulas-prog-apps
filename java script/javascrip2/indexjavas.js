let square = document.getElementById('a1')

function alternarcolor(){
    square.style.background = "blue"
    if (square.style.background == "blue")
    {
        square.style.background == "red"
    }
    else{
        square.style.background == "blue"
    }
}

square.addEventListener("click", alternarcolor)




let inpu1 = document.getElementById("l1")

inpu1.addEventListener("input", trocarcor)

function trocarcor(e){
    square.style.backgroundColor = e.target.value
}

