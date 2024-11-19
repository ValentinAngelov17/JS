const Warehouse = require('./warehouse');
describe('Warehouse class tests', () => {

    let warehouse;

    beforeEach(() => {
        warehouse = new Warehouse(100);
    });

    describe('testing constructor for valid capacity', () => {
        test('should throw an error if invalid capacity is provided', () => {
            expect(() => {
                new Warehouse(-10);
            }).toThrow('Invalid given warehouse space');
        });

        test('should throw an error if invalid capacity is provided', () => {
            expect(() => {
                new Warehouse(0);
            }).toThrow('Invalid given warehouse space');
        });
    });


    describe('addProduct method', () => {
        test('should add a product to the warehouse when there is enough space', () => {
            const result = warehouse.addProduct('Food', 'Apples', 30);
            expect(result).toEqual({ Apples: 30 });
        });

        test('should throw an error if adding a product exceeds warehouse capacity', () => {
            expect(() => {
                warehouse.addProduct('Food', 'Bananas', 110);
            }).toThrow('There is not enough space or the warehouse is already full');
        });

        test('should update the quantity of an existing product', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            const result = warehouse.addProduct('Food', 'Apples', 20);
            expect(result).toEqual({ Apples: 50 });
        });

        test('should handle adding products of different types correctly', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            const result = warehouse.addProduct('Drink', 'Juice', 20);
            expect(result).toEqual({ Juice: 20 });
        });
    });


    describe('occupiedCapacity method', () => {
        test('should return 0 when the warehouse is empty', () => {
            expect(warehouse.occupiedCapacity()).toBe(0);
        });

        test('should return the total quantity of all products in the warehouse', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Drink', 'Juice', 20);
            expect(warehouse.occupiedCapacity()).toBe(50);
        });

        test('should accurately update the occupied capacity after adding more products', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Food', 'Bananas', 10);
            expect(warehouse.occupiedCapacity()).toBe(40);
        });
    });

})