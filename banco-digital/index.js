const App = require("./App")

App.createUser("vinicius@email.com", "Vinicius Aguiar")
App.createUser("felipe@email.com", "Felipe Aguiar")
App.createUser("luana@email.com", "Luana Silva")

App.deposit("vinicius@email.com", 100)

App.trasnfer("vinicius@email.com", "felipe@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("luana@email.com", 2000, 24)


console.log(App.findUser("vinicius@email.com"))
console.log(App.findUser("vinicius@email.com").account)
console.log(App.findUser("luana@email.com"))
console.log(App.findUser("luana@email.com").account)
console.log(App.findUser("luana@email.com").account.loans[0].installments)