const Author = require("./Author")

const vini = new Author("Vinicius Aguiar")

// const post = vini.writePost("Titulo do Post", "Palmeiras o maior do Brasil")

// post.addComment("Isaac", "Muito boom")
// post.addComment("Lucas", "realmente me ajudou demais, valeu")

// console.log(vini)
// console.log(post)

const loulou = new Author("João Lourenço")
const post = loulou.writePost("Valdivia é sim o maior idolo da Sociedade Esportiva Palmeiras")

post.addComment("Vinicius", "Sábio demais")
post.addComment("Felipe", "Concordo 100%")

console.log(loulou)
console.log(post)