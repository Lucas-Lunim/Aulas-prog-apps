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

function dados(data,id){
    let container = document.getElementById("container")
    let pai = document.createElement("id")
    pai.id = id
    
    let id_name = id + ":"
    let title = document.createElement("span")
    title.innerHTML = id_name
    pai.appendChild(title)

    data.forEach(element => {
        let div = document.createElement("div")
        let span = document.createElement("span")

        span.innerHTML = `${element.name}`
        div.appendChild(span)

        pai.appendChild(div)
        
    });

    container.appendChild(pai)
}

let dados_filtrados

dados_filtrados = users.filter((p) => p.active == true)
console.log(dados_filtrados)

dados_filtrados= users.filter((p) => p.active == false)
dados(dados_filtrados, "Inativos")

dados_filtrados = users.filter((p) => p.role == "dev")
dados(dados_filtrados, "Devs")

dados_filtrados = users.filter((p) => p.role == "designer")
dados(dados_filtrados, "Des")

dados_filtrados = users.filter((p) => p.role == "manager")
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.role == "data_analyst")
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.salary > 5000)
dados(dados_filtrados, "AAAA") 

dados_filtrados = users.filter((p) => p.salary < 4000)
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.age > 30)
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.age < 25)
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.role == "data_analyst" && p.active == true)
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.role == "dev" && p.salary > 4000)
dados(dados_filtrados, "AAAA")

dados_filtrados = users.filter((p) => p.role == "manager" && p.age > 30)
dados(dados_filtrados, "AAAA")