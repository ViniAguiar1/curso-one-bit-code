function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(5, 6))

operacao = function subtracao(a, b){
    return a - b
}

console.log(operacao(4, 6))