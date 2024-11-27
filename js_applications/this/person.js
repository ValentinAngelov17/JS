class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter for firstName
    get firstName() {
        return this._firstName;
    }

    // Setter for firstName
    set firstName(value) {
        this._firstName = value;
    }

    // Getter for lastName
    get lastName() {
        return this._lastName;
    }

    // Setter for lastName
    set lastName(value) {
        this._lastName = value;
    }

    // Getter for fullName
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // Setter for fullName
    set fullName(value) {
        // Check if the input is valid
        const parts = value.split(' ');
        if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        }
    }
}

// Example usage:
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); // Peter Ivanov
person.firstName = "George";
console.log(person.fullName); // George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); // George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); // Nikola
console.log(person.lastName); // Tesla
