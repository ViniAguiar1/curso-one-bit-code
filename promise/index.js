// pending = pendente (estado inicial)
// resolved = resolvida 
// reject = rejected (foi executada, porem algo deu errado)

// const p = new Promise((resolve, reject) => {
//     console.log("A promise está sendo executada")
//     setTimeout(() => {
//         if(true) {
//             reject(false)
//         }
//         console.log("Resolvend0 a promise")
//         resolve(true)
//     })
// }, 2000)

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// }, 3000)

function execute() {
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log("A promise esta sendo executada")
        setTimeout(() => {
            console.log("Resolvendo Promise...")
            resolve("Resultado")
        }, 1000)
    })
}

const p = execute()
console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000)