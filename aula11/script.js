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

// const veiculo1 = new automovel("Fiesta", "Ford", "Branco", 2015, "1.5L")
// console.log(veiculo1.acelerar())

// const veiculo2 = new automovel("Astra", "Chevrolet", "Preto Fosco", 1999, "2.0L")
// console.log(veiculo2.frear())

class pessoa {

    constructor(peso, altura, membros, consciencia, nome){
        this.peso = peso
        this.altura = altura
        this.membros = membros
        this.consciencia = consciencia
        this.nome = nome
    }

    alto(){
        return `A pessoa ${this.nome} tem ${this.altura} de altura`
    }

}

// const pessoa1 = new pessoa("70", "1.77", "5", "99%", "Caique")
// console.log(pessoa1.alto())

class animal {

    constructor(corpo, textura, cor, reflexo, fome){
        this.corpo = corpo
        this.textura = textura
        this.cor = cor
        this.reflexo = reflexo
        this.fome = fome
    }


}


class produto {

    constructor(embalagem,quantidade,textura,valor,qualidade){
        this.embalagem = embalagem
        this.quantidade = quantidade
        this.textura = textura
        this.valor = valor
        this.qualidade = qualidade
    }
}

class ligre extends animal{
    morde(){
        return "ai ai, me mordeu"
    }
}

const felino = new ligre("Médio", "Pelagem", "laranja", "Assasino", "Carnivoro")
console.log(felino.morde())