const charLookUp = require('./charLookup');

test('check if first parameter is number, expected undefined', () => {
    expect(charLookUp(5, 5)).toBe(undefined);
});

test('check if second parameter(index) is float expected undefined', () => {
    expect(charLookUp('Gosho', 3.12)).toBe(undefined);
});

test('check if second parameter(index) is in valid range - from 0 to length of the string - 1', () => {
    expect(charLookUp('Gosho', -1)).toBe('Incorrect index');
    expect(charLookUp('Gosho', 8)).toBe('Incorrect index');
});

test('check if the function return a valid index of a string', () => {
    expect(charLookUp('Gosho', 2)).toBe('s');
    expect(charLookUp('Gosho', 0)).toBe('G');
});

test('check if first parameter is boolean, expected undefined', () => {
    expect(charLookUp(true, 5)).toEqual(undefined);
    expect(charLookUp(false, 5)).toBe(undefined);
});

