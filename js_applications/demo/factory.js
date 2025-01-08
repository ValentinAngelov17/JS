class Animal {
    speak() {
        throw new Error("This method should be overridden!");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow!");
    }
}

class AnimalFactory {
    static createAnimal(type) {
        if (type === "dog") {
            return new Dog();
        } else if (type === "cat") {
            return new Cat();
        } else {
            throw new Error("Unknown animal type!");
        }
    }
}

// Test the Factory Method pattern
const dog = AnimalFactory.createAnimal("dog");
dog.speak();  // Output: Woof!

const cat = AnimalFactory.createAnimal("cat");
cat.speak();  // Output: Meow!
