// Método Filter -> Filtrar de um vetor com base em uma condição
// Método Find -> Encontrar um valor com base em uma condição
// Método Reduce -> Reduz o vetor para um único valor
const pessoas = []
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

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)


// const arr = [1,2,3,4,5]

// const somaArr = arr.reduce((acc, value) => {
// 	return acc + value
// }, 0)

// console.log(somaArr)

// const ageAvg = pessoas.reduce((acc, pessoa) =>{
// 	return acc + pessoa.age / pessoas.length
// }, 0)

// console.log(ageAvg.toFixed(0))

const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr) => {
	return arr * 2
})


console.log(mappedArr)

console.log(pessoas)

const mappedPeople = pessoas.map((pessoa) => {
return pessoa.name

})

console.log(mappedPeople)