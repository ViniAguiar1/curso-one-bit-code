const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Gonçalves de Barros", 806, "Copacabana", "Rio de Janeiro", "RJ")

const vini = new Person("Vinicius", addr)

console.log(vini)
console.log(vini.address.fullAddress())