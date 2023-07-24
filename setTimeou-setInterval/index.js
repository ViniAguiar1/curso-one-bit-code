console.log("Programa iniciado!")

// const timeoutId = setTimeout(() => {
//     console.log('3 segundo se passaram desde que o programa foi iniciado')
// }, 3000)

// clearTimeout(timeoutId)

var seconds = 0

const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds}`)
    if(seconds > 10) {
        clearInterval(intervalId)
        console.log("Tempo esgotado")
    }
}, 3000)

