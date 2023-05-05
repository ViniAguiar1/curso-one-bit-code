// Simulando um Blog com Classes
// Crie uma aplicação javascript que simule um funcionamento básico de blog utilizando classes e associações.
// Você deverá criar uma classe Post e uma classe Comment, onde uma instância de Post poderá receber vários comentários. As instâncias de Post também devem ter um método específico para adição de comentários nelas.
// Você também deverá criar uma classe Author, e os objetos da classe Post também devem possuir um objeto da classe Author, que é o autor do post. Além disso, os objetos da classe Author também devem possuir um array de posts (objetos da classe Post) e um método específico para criação de posts, que deverá criar uma instância utilizando aquele próprio autor, incluir o post no array e então retornar o post criado.

const Comment = require("./Comment")
class Post {
    constructor(title, body, author){
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }

    addComment(username, content){
        this.comments.push(new Comment(username, content))
    }
}

module.exports = Post