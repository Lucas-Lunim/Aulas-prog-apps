const { use } = require("react")

class User{
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password){
        if(new.target === User){
            throw console.error("não usa o user não zé, pode n")
        }
        if(name.lenght == 0 || 
            !(email.includes("@")) ||
            password.lenght < 6){
                throw new Error("Nome é nulo ou a email não tem @ ou senha não tem 6 char")
        }
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
    }

    
    get nome(){
        return
    }

}

class cliente extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

}

class admin extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    showAllUser(){
        return users(2, "adm", "yayya@gmail.com", "5123")
    }

}

const u1 = new cliente("9292217",'Lunim',"lunimbra@pocoto.com","512")
console.log(u1.showData());
const a1 = new admin("9294213", "Pedro", "Pedra@gmail.com", "120")
console.log(a1.showData());
