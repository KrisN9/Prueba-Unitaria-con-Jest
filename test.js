const {sum} = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 127.9 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(4.0)).toBe(511.6);
})

test("One yen should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(511.4)).toBe(409.12);
})