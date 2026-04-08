// Abstração -> Trazer um objeto do mundo real para a programação (criação da classe).
// Herança -> Classe filha herda atributos e métodos da classe pai.
// Encapsulamento -> Gerenciar a visibilidade e o acesso aos dados (atributos e métodos).
// Polimorfismo -> transformação de métodos baseado em uma classe.

class Animal{
    #nome_cientifico
    #peso
    #alimentacao
    #locomocao

    constructor(nome_cientifico, peso, alimentacao, locomocao){
        this.#nome_cientifico = nome_cientifico
        this.#peso = peso
        this.#alimentacao = alimentacao
        this.#locomocao = locomocao
    }

    emitirSom(){
        console.log("Emitindo som...")
    }

    locomover(){
        console.log("Animal se locomovendo")
    }
}

class Cachorro extends Animal{
    emitirSom(){
        console.log("Au Au")
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log("Miau Miau")
    }
}

const dog = new Cachorro("Dogos latindus", 20, "Carnivoro")
const cat = new Gato("Gatilis Miandus", 5, "Qualquer coisa")

dog.emitirSom()
cat.emitirSom()


