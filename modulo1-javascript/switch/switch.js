const resultado = prompt("Escolha uma alternativa:\na)\nb)\nc)")
const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
    case "a":
        alert("O resultado é 'a'")
        break
        case "b":
            alert("O resultado é 'b'")
            break
            case "c":
            alert("O resultado é 'c")
            break
            default:
                alert("Finalizando...")
}