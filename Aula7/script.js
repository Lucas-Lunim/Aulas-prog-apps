const pessoa = []
pessoa1 = {
    name: "Erich",
    lastname: "Natal",
    age: "22"
}

pessoa2 = {
    name: "Igor",
    lastname: "Machado",
    age: "20"
}

pessoa3 = {
    name: "Maria",
    lastname: "Clara",
    age: "18"
}

pessoa4 = {
    name: "Leticia",
    lastname: "Costa",
    age: "20"
}

pessoa5 = {
    name: "Raphael",
    lastname: "Ferreira",
    age: "19"
}

pessoa.push(pessoa1)
pessoa.push(pessoa2)
pessoa.push(pessoa3)
pessoa.push(pessoa4)
pessoa.push(pessoa5)

const filteredPeople = pessoa.filter((p) => p.age >= 20)
const findLeticia = pessoa.find((p) => p.name == "Leticia")

// console.log(pessoa)
console.log(filteredPeople)
console.log(findLeticia)
console.log(pessoa.indexOf(findLeticia))

// let container = document.getElementById("container")

// function createCard(pessoa){
//     let div = document.createElement("div")
//     let span = document.createElement("span")
//     span.innerHTML = `${pessoa.name} ${pessoa.age}`
//     div.appendChild(span)

//     return div
// }

// filteredPeople.forEach(pessoa => {
//     const card = createCard(pessoa)
//     container.appendChild(card)
// })