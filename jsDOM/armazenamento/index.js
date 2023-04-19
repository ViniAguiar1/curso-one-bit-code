document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
  })
  
  document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
  })