let name = "Vinicius"
console.log(...name) // separa as letras "V i n i c i u s"

let arr = [4, 2, 3, 1, 20]
console.log(...arr) // separa os elementos do array

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy })

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })