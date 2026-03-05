const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

const nameRole = users.map((user) => {
    return {"name": user.name, "role": user.role}
})

const name = users.map((user) => {
    return user.name
})

const nameUpcase = users.map((user) =>{
    return user.name.toUpperCase()
})

const yearSalary = users.map((user) => {
    return user.salary*12
})

const nameAge = users.map((user) => {
    return {"name": user.name, "age": user.age}
})

const nameSalary = users.map((user) => {
    let moeda = new Intl.NumberFormat('pt-BR',{
        style: "currency",
        currency: "BRL",
    }).format(user.salary)

    return {"name": user.name, "salary": moeda}
})

const classeAge = users.map((user) => {
    if (user.age <= 26){
        idadeClass = "Júnior"
    }
    else if (user.age <= 30){
        idadeClass = "Pleno"
    }
    else {
        idadeClass = "Sênior"
    }
    return {"name": user.name, "age": user.age, "idadeClass": idadeClass}
})

const classeSal = users.map((user) => {
    if (user.salary < 4000){
        salarioClass = "baixo"
    }
    else if (user.salary < 7000){
        salarioClass = "médio"
    }
    else {
        salarioClass = "alto"
    }
    return {"name": user.name, "salary": user.salary, "salarioClass": salarioClass}
})

const idNameActive = users.map((user) => {
    return {"id": user.id, "name": user.name, "active": user.active}
})

// console.log(idNameActive)

// --------------------------------------------------------------

const somaTotal = users.reduce((acc, user) => {
    return acc + user.salary
}, 0)


const mediaSal = users.reduce((acc, user) =>{
    return acc + user.salary / users.length
}, 0)

const mediaAge = users.reduce((acc, user) => {
    return acc + user.age / users.length
}, 0)

const activeUsers = users.reduce((acc,user) => {
    return acc + user.active
}, 0)

const inactiveUsers = users.reduce((acc,user) => {
    return acc + (user.active == false)
}, 0) 

const maiorSal = users.reduce((acc,user) => {
    return Math.max(acc,user.salary)
}, 0)

const menorSal = users.reduce((acc,user) => {
    return Math.min(acc,user.salary)
}, Infinity)

const activeSal = users.reduce((acc, user) => {
    if (user.active == true) {
        return acc + user.active
    }
    return acc
}, 0)

console.log(activeSal)
