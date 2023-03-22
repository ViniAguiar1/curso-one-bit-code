let escolha = 5

do {
    escolha = prompt(
        "Seja bem-vindo(a)\n" + 
        "\nEscolha uma das opçoes abaixo:" +
        "\n1. Opçao Um" + 
        "\n2. Opçao Dois" + 
        "\n3. Opçao Três" + 
        "\n4. Opçao Quatro" + 
        "\n5. Encerrar"  
    )

    switch (escolha){
        case "1":
            alert("Você escolheu a opção 1")
            break
            case "2":
                alert("Você escolheu a opção 2")
                break
                case "3":
                    alert("Você escolheu a opção 3")
                    break
                    case "4":
                        alert("Você escolheu a opção 4")
                        break
                        case "5":
                            alert("Voce escolheu encerrar.")
                            alert("Encerrando...")
                            break
                            default:
                                alert("Opção invalida")
    }
} while (escolha !== 5){}