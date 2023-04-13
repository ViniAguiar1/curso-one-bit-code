function register(element){
    // console.log(element)
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuario ${username} registrado!`)
    } else {
        alert("As senhas não conferem!")
    }

    console.log({ username, password, passwordConfirmation })
}