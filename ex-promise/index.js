function imc(peso, altura) {
    return new Promise((resolve, reject) => {
        if(typeof peso !== 'number' || typeof altura !== "number") {
            reject("Os argumentos passados devem ser do tipo numero")
        } else {
            resolve(peso / (altura * altura)
            )
        }
    })
}

function showImc(peso, altura) {
    imc(peso, altura).then((result) => {
        console.log(`O resultado do IMC foi: ${result}`)
        if (result < 15.5) {
            console.log(`Situação: MAGREZA`)
        } else if(result < 25) {
            console.log(`Situação: NORMAL`)
        } else if(result < 30) {
            console.log(`Situação: SOBREPESO`)
        } else if (result < 40) {
            console.log("Situação: OBSIDADE")
        } else console.log("Situação: OBESIDADE GRAVE")
    }).catch((err) => {
        console.log(err)
    })

    
    console.log("Calculando...")
}

showImc(87, 1.81)
showImc(77, 1.78)
showImc(55, 1.55)
showImc(55, "texto")
showImc(127, 1.80)
