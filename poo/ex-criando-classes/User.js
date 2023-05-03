class User {
    constructor(fullname, email, password){
        this.fullname =  fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if (this.email === email && this.password === password){
            console.log(`Login de ${this.fullname} bem sucedido`)
        } else {
            console.log(`Login não efetuado`)
        }
    }
}

const vinicius = new User("Vinicius Aguiar Araujo", "vinicius.aguiar1@icloud.com", "0000")
// vinicius.login("vinicius.dsgr4@gmail.com", "4231")
vinicius.login("vinicius.aguiar1@icloud.com", "0000")


console.log(vinicius)