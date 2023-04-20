const soma = (a, b) => {
    return a + b
}
const multiplicação = (a, b) => a * b

console.log(multiplicação(5, 7))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)