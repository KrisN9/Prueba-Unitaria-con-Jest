test('adds 14 + 9 to equal 23', () => {
    const {sum} = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("3.5 euros should be 4.2 dollars", () => {
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("3.0 dollars should be 319.75 yens", () => {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3.0)).toBe(319.75);
});

test("255.8 yens should be 1.6 pounds", () => {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(255.8)).toBe(1.6);
});