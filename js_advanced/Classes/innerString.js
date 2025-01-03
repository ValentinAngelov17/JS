class Stringer {
    constructor(stringValue, length) {
        this.innerString = stringValue;
        this.innerLength = length;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = this.innerLength - length > 0 ? this.innerLength - length : 0;
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        }

        return this.innerString.slice(0, this.innerLength) + (this.innerLength >= this.innerString.length ? '' : '...');
    }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4); console.log(test.toString()); // Test