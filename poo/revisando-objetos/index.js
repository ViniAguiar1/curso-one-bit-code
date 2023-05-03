// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 55,
//     tags: ['fantasia', 'aventura', 'medieval'],
//     author: {
//         name: "Vinicius Aguiar"
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     },
//     // save: function(){
//     //     // salva no banco de dados
//     // }
// }

// PascalCase = primeira letra maiuscula
function Book(title, author, pages, tags){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function (){
        // salva no banco de dados
    }
}

const author = { name: "Vinicius Aguiar" }
const tags = ["fantasia", "aventura", "medieval"]

const eragon = new Book("Eragon", author, 552, tags )
console.log(eragon)

const eldest = new Book("Eldest", 781, tags, author)
console.log(eldest)