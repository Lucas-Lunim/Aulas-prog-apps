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

    get ideEmail(){
        return "ID: " + String(this.#id) + " Email: " + String(this.#email)
    }

    get nome()

}

class cliente extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

}

class admin extends User{


}

lunimb = new cliente("9292217",'Lunim',"lunimbra@pocoto.com","qwert")

console.log(lunimb.ideEmail)
