test('adds 14 + 9 to equal 23', () => {
    const {sum} = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One dollar should be 106.58 yens", () => {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3.0)).toBe(319.75);
});

test("One yen should be 0.006 pounds", () => {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(81.0)).toBe(0.507);
});