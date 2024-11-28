class Hex {
    constructor(value) {
        this.value = value; 
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number) {
        const addedValue = this.value + (number instanceof Hex ? number.value : number);
        return new Hex(addedValue); 
    }
    minus(number) {
        const subtractedValue = this.value - (number instanceof Hex ? number.value : number);
        return new Hex(subtractedValue); 
    }

    static parse(hexString) {
        return parseInt(hexString, 16); 
    }
}

let FF = new Hex(255);
console.log(FF.toString()); // Output: 0xFF
console.log(FF.valueOf() + 1 === 256); // Output: true

let a = new Hex(10);
let b = new Hex(5);

console.log(a.plus(b).toString()); // Output: 0xF
console.log(a.plus(b).toString() === '0xF'); // Output: true
