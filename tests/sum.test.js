const { expect } = require('@jest/globals');
const sum = require('../sum');

test('should add 2 numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})

test('should add 2 numbers despite decimals', () => {
    expect(
        sum(1.2323444, 2.000002)
    ).toBe(3.2323464)
})

test('should return 0 for chars', () => {
    expect(
        sum(1.2323444, 'a')
    ).toBe(0)
})
