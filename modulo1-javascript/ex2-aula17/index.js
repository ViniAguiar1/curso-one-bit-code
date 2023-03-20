const entradaC1 = prompt("Digite o nome do primeiro carro");
const entradaV1 = prompt("Digite a velocidade do primeiro carro");

const entradaC2 = prompt("Digite o nome do segundo carro");
const entradaV2 = prompt("Digite a velocidade do segundo carro");

const velocidade1 = parseFloat(entradaV1);
const velocidade2 = parseFloat(entradaV2);

if (velocidade1 > velocidade2){
    console.log(`O ${entradaC1} é mais rapido`);
} else if (velocidade1 < velocidade2){
    console.log(`O ${entradaC2} é mais rapido`);
} else if (velocidade1 == velocidade2){
    console.log("Ambos os carros tem a mesma velocidade");
}
