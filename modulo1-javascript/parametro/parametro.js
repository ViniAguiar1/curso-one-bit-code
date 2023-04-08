// function dobro(x) {
//     alert(`O dobro de ${x} é ${x * 2}`)
// }
// dobro(5)

function dizerOla(name = 'mundo'){
    alert(`Olá ${name}`)
}
// dizerOla('Vinicius')
// dizerOla()

function soma(a, b) {
    alert(`Resultado da soma é ${a + b}`)
}
// soma(7, 6)

function criarUsuario(name, email, senha, tipo =  "admin"){
    const usuario = { 
    name: name,
    email: email,
    senha: senha,
    tipo: tipo }
    console.log(usuario)
}

function novoUsuario(name, tipo = "admin", email, senha)

criarUsuario("Vinicius", "vinicius.aguiar1@icloud.com", "12345")
