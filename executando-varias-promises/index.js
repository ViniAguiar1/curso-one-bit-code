// function asyncSun(a, b) {
//     return new Promise((resolve, reject) => {
//         if(typeof a !== 'number' || typeof b !== "number") {
//             reject("Os parametros devem ser do tipo numero")
//         } else {
//             resolve(a + b)
//         }
//     })
// }

// function asyncSubtract(a, b) {
//     return new Promise((resolve, reject) => {
//         if(typeof a !== 'number' || typeof b !== 'number') {
//             reject("Os parametros devem ser do tipo numero!")
//         } else {
//             resolve(a - b)
//         }
//     })
// }

// const sumResult = asyncSun(50, 33)
// const subtractResult = asyncSubtract(50, null)

// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

const numbers = [4, 5, 9, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        resolve(x * x)
    })
}

Promise.all([numbers.map(number => asyncSquare(number))]).then(squares => {
    console.log(squares)
})