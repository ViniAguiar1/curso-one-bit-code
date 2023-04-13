function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    // console.log({ position, name, number })

    const confirmation = confirm(`Escalar ${name} como ${position}?`)

    if(confirmation){
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        // limpar forms

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm(`Remover o jogador ${playerToRemove.innerText} ?`)

    if (confirmation){

        // document.getElementById('teamList').removeChild(playerToRemove)
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}