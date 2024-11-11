class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, ${this.email})`
    }
}
const person = new Person('pesho', 'peshov', 25, 'smth@abv.bg')

console.log(person.toString());