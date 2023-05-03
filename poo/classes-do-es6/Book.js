class Book {
    constructor(title){
        // instaciar = ato de criar uma instacia
        this.title = title
        this.published = false
    }

    publish(){
        this.published = true
    }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")
eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)
console.log([eldest, eragon] instanceof Array)