const { sum } = require('./sumNumbers');

describe('sum()', () => {

    test('should return the correct sum for an array of positive numbers', () => {
        expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return the correct sum for an array of negative numbers', () => {
        expect(sum([-1, -2, -3, -4, -5])).toBe(-15);
    });

    test('should return the correct sum for an array of mixed positive and negative numbers', () => {
        expect(sum([1, -2, 3, -4, 5])).toBe(3);
    });

    test('should return 0 for an empty array', () => {
        expect(sum([])).toBe(0);
    });

    test('should handle arrays with a single number', () => {
        expect(sum([42])).toBe(42);
    });

    test('should handle arrays with numeric strings by converting them to numbers', () => {
        expect(sum(['1', '2', '3', '4', '5'])).toBe(15);
    });

    test('should return NaN if any element in the array is not a valid number', () => {
        expect(sum([1, 2, 'hello', 4, 5])).toBeNaN();
    });

    test('should handle an array of floating point numbers correctly', () => {
        expect(sum([1.5, 2.5, 3.5])).toBe(7.5);
    });

    test('should return NaN if any element is NaN', () => {
        expect(sum([1, NaN, 3])).toBeNaN();
    });

});