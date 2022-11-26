const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", () => {
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One euro should be 1.2 dollars, and 127.9 yens", () => {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(4.2/1.2)).toBe(447.65);
});

test("One euro should be 1.2 dollars, 127.9 yens, and 0.8 pounds", () => {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(511.4)).toBe(409.12);
});