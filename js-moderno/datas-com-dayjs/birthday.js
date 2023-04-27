const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs() // significa o "agora", quando não se tem parametro

    const ageInYears = today.diff(birthday, "year")
    const nextBirthday = birthday.add(ageInYears + 1, "year")
    const daysToNextBirthday = nextBirthday.diff(today, "day") + 1

    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversario em: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}

birthday("2003-04-20")