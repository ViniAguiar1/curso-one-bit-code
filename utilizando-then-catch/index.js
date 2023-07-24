function execute() {
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A promise esta sendo executada")
        setTimeout(() => {
            if(!true) {
                reject("A promise foi rejeitada")
            } else {
                console.log("Resolvendo Promise...")
                resolve(42)
            }
        }, 1000)
    })
}

execute().then((result) => {
    console.log(`A promise foi resolvida, o resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log(`A promise foi finalizada.`)
})