function calcular(a, b, operacao){
    console.log("Realizando uma opercação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y){
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(3, 5, somar))

console.log(calcular(8, 4, function subtrair(m, n){
    console.log("Realizando uma subtração")
    return m- n 
}))

// high order é uma função que recebe outra função como parametro

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Uva", "Abacaxi"]

for (let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})