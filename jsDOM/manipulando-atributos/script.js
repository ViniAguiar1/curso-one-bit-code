const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value = input.value === '' ? "Olá, mundo!" : ''
})