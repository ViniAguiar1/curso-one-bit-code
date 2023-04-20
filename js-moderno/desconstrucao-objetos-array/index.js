const person = {
    name: "Vinicius",
    job: "Developer",
    parents: ["Raquel", "Mario"]
}

const name = person.name

const { job, parents } = person
console.log(`${name} é um ${job}`)
// console.log(parents)

const [mother, father] = parents
console.log(mother, father)

function createUser(person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}

const luke = createUser(person)
console.log(luke)