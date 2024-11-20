const Warehouse = require('./warehouse');

describe('Warehouse Class Tests', () => {
    // Test constructor and capacity getter/setter
    describe('Constructor and Capacity', () => {
        test('should set the capacity correctly', () => {
            const warehouse = new Warehouse(100);
            expect(warehouse.capacity).toBe(100);
        });

        test('should throw an error for invalid capacity', () => {
            expect(() => new Warehouse(-10)).toThrow('Invalid given warehouse space');
            expect(() => new Warehouse('invalid')).toThrow('Invalid given warehouse space');
        });
    });

    // Test addProduct
    describe('addProduct()', () => {
        let warehouse;

        beforeEach(() => {
            warehouse = new Warehouse(100);
        });

        test('should add products correctly', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            expect(warehouse.availableProducts.Food).toEqual({ Apples: 30 });
        });

        test('should add multiple products of the same type', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Food', 'Bananas', 20);
            expect(warehouse.availableProducts.Food).toEqual({ Apples: 30, Bananas: 20 });
        });

        test('should increment quantity if product already exists', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Food', 'Apples', 20);
            expect(warehouse.availableProducts.Food).toEqual({ Apples: 50 });
        });

        test('should throw an error if adding exceeds capacity', () => {
            warehouse.addProduct('Food', 'Apples', 90);
            expect(() => warehouse.addProduct('Food', 'Bananas', 20)).toThrow(
                'There is not enough space or the warehouse is already full'
            );
        });
    });

    // Test orderProducts
    describe('orderProducts()', () => {
        let warehouse;

        beforeEach(() => {
            warehouse = new Warehouse(100);
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Food', 'Bananas', 50);
        });

        test('should order products by quantity in descending order', () => {
            const orderedProducts = warehouse.orderProducts('Food');
            expect(orderedProducts).toEqual({ Bananas: 50, Apples: 30 });
        });
    });

    // Test occupiedCapacity
    describe('occupiedCapacity()', () => {
        let warehouse;

        beforeEach(() => {
            warehouse = new Warehouse(100);
        });

        test('should return 0 if no products are added', () => {
            expect(warehouse.occupiedCapacity()).toBe(0);
        });

        test('should calculate total occupied capacity correctly', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Drink', 'Juice', 20);
            expect(warehouse.occupiedCapacity()).toBe(50);
        });
    });

    // Test revision
    describe('revision()', () => {
        let warehouse;

        beforeEach(() => {
            warehouse = new Warehouse(100);
        });

        test('should return "The warehouse is empty" if no products', () => {
            expect(warehouse.revision()).toBe('The warehouse is empty');
        });

        test('should return the correct list of products', () => {
            warehouse.addProduct('Food', 'Apples', 30);
            warehouse.addProduct('Drink', 'Juice', 20);
            const expectedOutput = `Product type - [Food]\n- Apples 30\nProduct type - [Drink]\n- Juice 20`;
            expect(warehouse.revision()).toBe(expectedOutput);
        });
    });

    // Test scrapeAProduct
    describe('scrapeAProduct()', () => {
        let warehouse;

        beforeEach(() => {
            warehouse = new Warehouse(100);
            warehouse.addProduct('Food', 'Apples', 30);
        });

        test('should reduce the quantity of the product correctly', () => {
            const updatedProducts = warehouse.scrapeAProduct('Apples', 10);
            expect(updatedProducts).toEqual({ Apples: 20 });
        });

        test('should set the quantity to 0 if scraping more than available', () => {
            const updatedProducts = warehouse.scrapeAProduct('Apples', 40);
            expect(updatedProducts).toEqual({ Apples: 0 });
        });

        test('should throw an error if the product does not exist', () => {
            expect(() => warehouse.scrapeAProduct('Bananas', 10)).toThrow('Bananas do not exist');
        });
    });
});