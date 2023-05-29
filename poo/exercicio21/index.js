const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const vinicius = new Mage("Vinicius", 800, 1200, 1500, 1000)
const felipe = new Thief("felipe", 600, 900, 900)
// const guilherme = new Warrior("Guilherme", 900, 1000, 650, 700)
const caio = new Mage("Caio", 50, 50, 50, 50)

console.table({ vinicius, felipe, caio})

vinicius.attack(caio)
console.table({ vinicius, felipe, caio})
