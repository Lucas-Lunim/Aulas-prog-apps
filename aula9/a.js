//   id, brand, model, year, category, fuel, horsepower, weight_kg, city_km_l, price_brl

// const pessoa = require("./data.json")

// const pessoas = pessoa.filter((p) => p.salary == 1234)
// const pais = pessoa.map((p) => 
//     {return{name: p.name, parent: p.parents}})

// console.log(pessoa)

const vehicles = require("./dataAtv.json")

const somaTotal = vehicles.reduce((acc, car) => {
    return acc + car.price_brl;
}, 0)


const media = vehicles.reduce((acc, car) => {
    return acc + car.price_brl / vehicles.length
}, 0)


const modeloYear = vehicles.map((car) => {
    return {"model": car.model, "year": car.year}
})


const marcaCategory = vehicles.map((car) => {
    return {"brand": car.brand, "catergory": car.category}
})


const modeloFuel = vehicles.map((car) => {
    return {"model": car.model, "fuel": car.fuel}
})


const marcaModeloPreco = vehicles.map((car) => {
    return {"brand": car.brand, "model": car.model,"price_brl": car.price_brl}
})


const pesoModel = vehicles.map((car) => {
    return {"weight_kg": car.weight_kg, "model": car.model}
})

const somenteEletrico = vehicles.filter(car =>
    car.fuel == "Electric").map(car =>
    ({"brand": car.brand,"model": car.model,"fuel": car.fuel}
))

const menosFuel = vehicles.filter(car => car.city_km_l < 10)

const maisWeight = vehicles.reduce((max, car) => 
car.weight_kg > max.weight_kg ? car : max)

console.log(maisWeight)
