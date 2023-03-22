const turista = prompt("E ai, turista! Qual é o seu nome?");
let cidades = "";
let contagem = 0
let continuar = prompt("Ja visitou alguma cidade? (Sim/Não)");

while (continuar === "Sim"){
    let cidade = prompt("Qual o nome da cidade?")
    // cidades = cidades + ...
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Voce visitou alguma outra cidades? (Sim/Não)")
}
alert(
    "Turista: " + turista +
    "\n ele ja visitou " + contagem + "cidades" + 
    "\n as cidades foram: " +  
    "\n" + cidades
)