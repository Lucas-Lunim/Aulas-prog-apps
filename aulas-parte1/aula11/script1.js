class automovel {

    constructor(modelo, marca, cor, ano, motor){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.motor = motor
    }

    acelerar(){
        return `O veiculo ${this.marca} ${this.modelo} está acelerando`
    }
    frear(){
        return `O veiculo ${this.marca} ${this.modelo} está freando`
    }
    esterçar(lado){
        return `O veiculo ${this.marca} ${this.modelo} está virando para o ${lado}`
    }

}

const veiculo1 = new automovel("Fiesta", "Ford", "Branco", 2015, "1.5L")
console.log(veiculo1.acelerar())

const veiculo2 = new automovel("Astra", "Chevrolet", "Preto Fosco", 1999, "2.0L")
console.log(veiculo2.frear())


class Carro extends automovel {

    n_portas
    qrd_lugares
    tracao
    tipo

    abrirPortas(){
        return "Abrindo as portas!"
    }
}

class Moto extends automovel {
    grau(){
        return "Olha o grau"
    }
}

const carro = new Carro("Kwid", "Renault", "Amarelo", 2018, "1.0L")
const moto = new Moto("S1000RR", "BMW", "Azul", 2025, "1000cc")

console.log(carro.acelerar())
console.log(carro.abrirPortas())

console.log(moto.acelerar())
console.log(moto.grau())