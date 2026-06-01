class Item {
    #id
    #title
    #available

    constructor(id, title, available){
        if(!title || available){

        }
        this.#id = id
        this.#title = title
        this.#available = true
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }

    setTitle(title){
        return !title ? console.error("Erro, sem titulo") : this.#title
    }

    verifyAvailable(available){
        return this.#available == true
    }

    changeAvailable(){
        return this.#available == true ? this.#available = false : this.#available = true
    }

    showBooks(){
        return{
            id: this.#id,
            title: this.#title,
            available: this.#available
        }
    }
}

class Book extends Item{

    #author

    constructor(id, title, author){
        if(!author){
            return console.error("Erro, falta o autor")
        } else {
            super(id, title)
            this.#author = author   
        }
    }
}

class movie extends Item{

    #duration

    constructor(id, title, duration){
        if(!duration){
            
        }
    }
}