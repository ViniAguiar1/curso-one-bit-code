const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas do baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
            case "2":
                const removerCarta = baralho.pop()
                if (!removerCarta) {
                    alert("Não nenhuma carta no baralho")
                } else {
                    alert("Voce puxou um(a) " + removerCarta)
                }
                break
                case "3":
            alert("Saindo...")
            break
            default:
                alert("Opção inválida!")
                break
    }
} while(opcao !== "3")