const entrada1 = prompt("Informe o primeiro numero");
const entrada2 = prompt("Informe o segundo numero");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
    "Resultado da soma: " + soma + 
    "\nResultado da subtração: " + subtracao +
    "\nResultado da mmultiplicação: " + multiplicacao +
    "\nResultado da divisão: " + divisao 
)