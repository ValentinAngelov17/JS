class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    showMessage() {
        console.log("This is the Singleton instance!");
    }
}

const instance1 = new Singleton();
instance1.showMessage();  // Output: This is the Singleton instance!

const instance2 = new Singleton();
console.log(instance1 === instance2);  // Output: true (same instance)
