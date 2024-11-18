// addSubtract.test.js
const createCalculator = require('./addSubstract');

describe('createCalculator', () => {
    test('should return an object with add, subtract, and get methods', () => {
        const calculator = createCalculator();
        expect(typeof calculator.add).toBe('function');
        expect(typeof calculator.subtract).toBe('function');
        expect(typeof calculator.get).toBe('function');
    });

    test('should keep internal value private', () => {
        const calculator = createCalculator();
        expect(calculator.value).toBeUndefined();
    });

    test('should start with a value of 0', () => {
        const calculator = createCalculator();
        expect(calculator.get()).toBe(0);
    });

    test('add() should correctly add numbers to the internal value', () => {
        const calculator = createCalculator();
        calculator.add(5);
        expect(calculator.get()).toBe(5);
        calculator.add(10);
        expect(calculator.get()).toBe(15);
    });

    test('add() should correctly parse and add numbers from strings', () => {
        const calculator = createCalculator();
        calculator.add('5');
        expect(calculator.get()).toBe(5);
        calculator.add('10');
        expect(calculator.get()).toBe(15);
    });

    test('subtract() should correctly subtract numbers from the internal value', () => {
        const calculator = createCalculator();
        calculator.subtract(5);
        expect(calculator.get()).toBe(-5);
        calculator.subtract(10);
        expect(calculator.get()).toBe(-15);
    });

    test('subtract() should correctly parse and subtract numbers from strings', () => {
        const calculator = createCalculator();
        calculator.subtract('5');
        expect(calculator.get()).toBe(-5);
        calculator.subtract('10');
        expect(calculator.get()).toBe(-15);
    });

    test('add() and subtract() should work together correctly', () => {
        const calculator = createCalculator();
        calculator.add(10);
        calculator.subtract(5);
        expect(calculator.get()).toBe(5);
        calculator.add('20');
        calculator.subtract('10');
        expect(calculator.get()).toBe(15);
    });

    test('get() should always return the current value', () => {
        const calculator = createCalculator();
        expect(calculator.get()).toBe(0);
        calculator.add(100);
        expect(calculator.get()).toBe(100);
        calculator.subtract(50);
        expect(calculator.get()).toBe(50);
    });

    test('add() and subtract() should handle invalid inputs gracefully', () => {
        const calculator = createCalculator();
        calculator.add('abc');
        expect(calculator.get()).toBeNaN();
        calculator.subtract('xyz');
        expect(calculator.get()).toBeNaN();
    });
});
