const PaymentPackage = require('./PaymentPackage'); // Adjust this path if necessary

test('should initialize with valid name and value', () => {
    const package = new PaymentPackage('Test Package', 100);
    expect(package.name).toBe('Test Package');
    expect(package.value).toBe(100);
    expect(package.VAT).toBe(20);
    expect(package.active).toBe(true);
});

test('should throw an error if only one parameter is provided', () => {
    expect(() => new PaymentPackage('Test Package')).toThrow('Value must be a non-negative number');
});

test('should throw an error if invalid name is provided', () => {
    expect(() => new PaymentPackage('', 100)).toThrow('Name must be a non-empty string');
    expect(() => new PaymentPackage(123, 100)).toThrow('Name must be a non-empty string');
});

test('should throw an error if invalid value is provided', () => {
    expect(() => new PaymentPackage('Test Package', -1)).toThrow('Value must be a non-negative number');
    expect(() => new PaymentPackage('Test Package', '100')).toThrow('Value must be a non-negative number');
});

test('should get and set name correctly', () => {
    const package = new PaymentPackage('Test Package', 100);
    package.name = 'New Name';
    expect(package.name).toBe('New Name');
});

test('should throw an error for invalid name', () => {
    const package = new PaymentPackage('Test Package', 100);
    expect(() => (package.name = '')).toThrow('Name must be a non-empty string');
    expect(() => (package.name = 123)).toThrow('Name must be a non-empty string');
});

test('should get and set value correctly', () => {
    const package = new PaymentPackage('Test Package', 100);
    package.value = 200;
    expect(package.value).toBe(200);
});

test('should throw an error for invalid value', () => {
    const package = new PaymentPackage('Test Package', 100);
    expect(() => (package.value = -10)).toThrow('Value must be a non-negative number');
    expect(() => (package.value = '200')).toThrow('Value must be a non-negative number');
});

test('should get and set VAT correctly', () => {
    const package = new PaymentPackage('Test Package', 100);
    package.VAT = 15;
    expect(package.VAT).toBe(15);
});

test('should throw an error for invalid VAT', () => {
    const package = new PaymentPackage('Test Package', 100);
    expect(() => (package.VAT = -5)).toThrow('VAT must be a non-negative number');
    expect(() => (package.VAT = '15')).toThrow('VAT must be a non-negative number');
});

test('should get and set active correctly', () => {
    const package = new PaymentPackage('Test Package', 100);
    package.active = false;
    expect(package.active).toBe(false);
});

test('should throw an error for invalid active value', () => {
    const package = new PaymentPackage('Test Package', 100);
    expect(() => (package.active = 'yes')).toThrow('Active status must be a boolean');
    expect(() => (package.active = null)).toThrow('Active status must be a boolean');
});

test('should return correct string representation when active', () => {
    const package = new PaymentPackage('Test Package', 100);
    const expected = `Package: Test Package\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
    expect(package.toString()).toBe(expected);
});

test('should return correct string representation when inactive', () => {
    const package = new PaymentPackage('Test Package', 100);
    package.active = false;
    const expected = `Package: Test Package (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`;
    expect(package.toString()).toBe(expected);
});

test('should update string representation when properties change', () => {
    const package = new PaymentPackage('Test Package', 100);
    package.VAT = 10;
    package.value = 200;
    const expected = `Package: Test Package\n- Value (excl. VAT): 200\n- Value (VAT 10%): 220`;
    expect(package.toString()).toBe(expected);
});
