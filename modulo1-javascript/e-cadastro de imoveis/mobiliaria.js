const imoveis = []
let opcao = ""
do {
    opcao = prompt(
        "Bem vindo(a) ao cadsatrode immoveis!\n" +
        `Total de imóveis: ${imoveis.length}` +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Lista imóveis\n3. Sair"
    )

    switch(opcao) {
        case "1":
            const imovel =  {}

            imovel.proprietario = prompt("Informe o nome do proprietario do imóvel:")
            imovel.quartos =  prompt("Quantos quartos possui o imovel?")
            imovel.banheiro = prompt("Quantos banheiros o imovel?")
            imovel.garagem =  prompt("O imóvel possui garagem Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                `\nProprietarios ${imovel.proprietario}` + 
                `\nQuartos: ${imovel.parseFloat(imovel.quartos)}` + 
                `\nBanheiros: ${imovel.parseFloat(imovel.banheiro)}` + 
                "\nPossui garagem? " + imovel.garagem
            )

            if (confirmacao) {
                imoveis.push(imovel)
            }

            break
            case "2":
                for (let i = 0; i < imoveis.length; i++){
                    alert(
                        `Imóvel ${i + 1}` + 
                        `\nProprietarios: ${imoveis[i].proprietario}` + 
                        `\nQuartos: ${imoveis[i].quartos}` + 
                        `\nBanheiros: ${imoveis[i].banheiro}` +
                        `\nPossui garagem? ${imoveis[i].garegm}`
                    )
                }
                break
                case "3":
                    alert("Encerrando...")
                    break
                    default:
                        alert("Opção inválida!")
    }
} while (opcao !== "3)")