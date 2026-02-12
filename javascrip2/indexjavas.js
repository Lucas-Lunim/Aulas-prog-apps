let square = document.getElementById('a1')
let inpu1 = document.getElementById("l1")

inpu1.addEventListener("input", trocarcor)

function trocarcor(e){
    square.style.backgroundColor = e.target.value
}

