const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8;
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}