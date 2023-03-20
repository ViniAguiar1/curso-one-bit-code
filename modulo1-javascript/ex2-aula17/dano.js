const atacante =  prompt("Qual é o nome do personagem atacante?");
const poderDeAtaque = prompt("Qual é seu poder de ataque?");

const defensor = prompt("Qual é o nome do defensor?");
let pontosDeVida = prompt("Quantos pontos de vida ele possui?");
const poderDeDefesa = prompt("Qual é seu poder de defesa?");
const possuiEscudo = prompt("ELe possui um escudo? (Sim/Não)");

let danoCAusado = 0;
if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não"){
    danoCAusado = poderDeAtaque - poderDeDefesa
} else if (  poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim")  {
    danoCAusado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCAusado

alert(atacante + " causou " + danoCAusado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor +"\nPontos de vida: " + pontosDeVida + 
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)