const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value = "Olá, mundo!"
    // input.getAttribute('value')

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function(){
    // input.type = input.type !== 'date' ? 'date' : 'text'
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite Algo...'
})

document.getElementById('disable').addEventListener('click', function() {
    input.setAttribute('disable', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log(`O valor do atributo data-something é: ${data}`)
})