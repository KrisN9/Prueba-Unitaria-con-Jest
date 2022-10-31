const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

module.exports = {sum};

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}

const fromDollarToYen = (dollar) => {
    return dollar * oneEuroIs["JPY"];
}

const fromYenToPound = (yen) => {
    return yen * oneEuroIs["GBP"];
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};