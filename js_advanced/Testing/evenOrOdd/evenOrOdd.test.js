const isEvenOrOdd = require('./evenOrOdd');

test('check if parameter is number, expected undefined', () => {
    expect(isEvenOrOdd(5)).toBe(undefined);
});

test('check if parameter is boolean, expected undefined', () => {
    expect(isEvenOrOdd(true)).toEqual(undefined);
    expect(isEvenOrOdd(false)).toBe(undefined);
});

test('check if string length is even or odd', () => {
    expect(isEvenOrOdd('aaa')).toBe("odd");
    expect(isEvenOrOdd('aa')).toBe('even');
});
