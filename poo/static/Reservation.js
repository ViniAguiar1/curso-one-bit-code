class Reservation {
    constructor(guests, rooms, days) {
        this.guests = guests
        this.rooms = rooms
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`Base Fee is ${Reservation.baseFee}`)
    }

    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()

Reservation.baseFee = 200 
const r1 = new Reservation(3, "201", 5)
console.log(r1)

const r2 = new Reservation(4, "157", 7)
console.log(r2)

console.log(`Premium Fee is ${Reservation.premiumFee}`)