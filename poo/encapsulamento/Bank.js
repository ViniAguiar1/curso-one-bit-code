class Bank {
    #password
    #balance =  0
    constructor(user){
        this.email = user.email
        this.#password = user.password
        this.cpf = user.cpf
    }

    viewBalance(email, password, cpf){
        if (this.#authenticate(email, password, cpf)) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate(email, password, cpf) {
        return this.email === email && this.#password === password && this.cpf === cpf
    }
}

const user = {
    email: "vinicius@email.com",
    password: "123456",
    cpf: "0000"
}

const myAccount = new Bank(user)
console.log(myAccount)
console.log(myAccount.viewBalance("vinicius@email.com", "123456", "0000"))