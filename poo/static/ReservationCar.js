class ReservationCar {
    constructor(model, days, age) {
        this.model = model
        this.days = days
        this.age = age
        this.total = days * ReservationCar.baseFee
    }

    static baseFee = 300

    static showBaseFee() {
        console.log(`Base Fee is ${ReservationCar.baseFee}`)
    }

    static get premiumBaseFee() {
        ReservationCar.baseFee * 2.5
    }
}

ReservationCar.showBaseFee()

const reserv1 = new ReservationCar("Mercedes GLA 200", 15, 20)
console.log(reserv1)

const reserv2 = new ReservationCar("Audi Q3", 45, 28)
console.table(reserv2)

const r3 = new ReservationCar("Ferrari", 10, 45)
console.table(r3)

ReservationCar.baseFee = 300

console.log(`Premium Fee is ${ReservationCar.premiumBaseFee}`)