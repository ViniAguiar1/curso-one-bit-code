class Account {
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
        // this.#balance = 0
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance
        } else {
            null
        }
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "vinicius@gmail.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("vinicius@gmail.com", "123456"))