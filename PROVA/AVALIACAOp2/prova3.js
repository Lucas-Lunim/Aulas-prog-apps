class Veiculo {
    #id
    #marca
    #modelo
    #preco
    #disponivel

    constructor(id, marca, modelo, preco){
        if(!marca || marca.lenght < 2 || !modelo || modelo.lenght < 2 || preco <= 0){
            return console.error("Ocorreu um erro, dados incorretos!")
        }
        this.#id = id
        this.#marca = marca
        this.#modelo = modelo
        this.#preco = preco
        this.#disponivel = true
    
    }

    get Id(){
        return this.#id
    }

    get MarcaModelo(){
        return this.#marca | this.#modelo
    }

    get Preco(){
        return this.#preco
    }

    set Preco(preco){
        return !preco < 0  | !disponivel == true ? console.error("O preço tem que ser maior que 0") : this.#preco = preco
    }

    verificarCarroAtivo(){
        return this.#disponivel === true ? true : false
    }

    vendaDcarro(){
        if(disponivel){
            return disponivel === true ? this.#disponivel = false : console.error("O carro está a venda!")
        }
    }

    
}

class Carro extends Veiculo{

    #portas
    constructor(id, marca, modelo, preco, portas){
        super(id, marca, modelo, preco)
        this.#portas = portas
    }

    get portas(){
        return this.#portas
    }

    set portas(portas){
        return portas > 0 ? this.#portas : console.error("Erro, verifique a quantidade")
    }
}

class Moto extends Veiculo{

    #cilindradas
    constructor(id, marca, modelo, preco, cilindradas){
        super(id, marca, modelo, preco)
    }

    get cilindradas(){
        return this.#cilindradas
    }
    set cilindradas(cilindradas){
        return cilindradas > 0 | cilindradas >= 50 | cilindradas <= 2000 ? this.#cilindradas : console.error("Erro, verifique a quantidade")
    }
}

const dados = new Veiculo("001", "fiat", "uno", 30000)

console.log(dados)
