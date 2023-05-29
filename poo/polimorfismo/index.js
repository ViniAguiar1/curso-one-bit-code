class Vehicle {
    move() {
        console.log("O veiculo esta se movendo")
    }
}

class Car extends Vehicle {
    move(){
        console.log("O carro esta se movendo")
    }
}

class Ship extends Vehicle {
    move() {
        console.log("O navio esta se movendo")
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`À aerenove esta a ${speed} km por horas`)
    }
}

const golf = new Car()
const iate = new Ship()
const jato = new Aircraft()

// golf.move()
// iate.move()
// jato.move(120)

function start(vehicle) {
    console.log("Iniciando um veiculo...")
    vehicle.move()
}

start(golf)
start(iate)
start(jato)
