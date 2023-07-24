// async function asyncSun(a, b) {
//     return a + b
// }

// function asyncSubtract(a, b) {
//     return a - b
// }

// const sumResult = asyncSun(50, 33)
// const subtractResult = asyncSubtract(50, 17)

// Promise.all([sumResult, subtractResult]).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

const numbers = [4, 5, 9, 13, 77]

async function asyncSquare(x) {
    return x * x
}

Promise.all([numbers.map(number => asyncSquare(number))]).then(squares => {
    console.log(squares)
})