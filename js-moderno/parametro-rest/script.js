function sum(...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 2))
console.log(sum(1, 2, 30,5, 8, 7, 77))