const numero = prompt(
    "Ola eu sou o robo da tabuada\n" +
"Informe um numero que voce deseja calcular:"
)
let resultado = ""

for (let fator = 1; fator <= 20; fator++){
    resultado += " -> " + numero + " * " + fator + " = " + 
    (numero * fator) + "\n"
}

alert(`Resultado da tabuada de ${numero}:\n\n ${resultado}`)