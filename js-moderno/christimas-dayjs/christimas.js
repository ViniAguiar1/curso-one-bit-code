const dayjs = require("dayjs");

function nextChristimas(date){
    const christimas = dayjs(date);
    const today = dayjs();

    const actualChristimas = today.diff(today,"year");
    const nextChristimas = christimas.add(actualChristimas + 1, "year");
    console.log(`O proximo natal sera em: ${nextChristimas.format("YYYY-MM-DD")}`);
}

actualChristimas(dayjs("2023-04-27"));

// não esta funcionando corretamente, sera feita atualizações futuramente
