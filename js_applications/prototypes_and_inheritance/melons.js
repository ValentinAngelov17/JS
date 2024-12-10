// Abstract class Melon
class Melon {
    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }
        this.weight = weight;
        this.melonSort = melonSort;
    }

    toString() {
        return `Sort: ${this.melonSort}`;
    }
}

// Classes for specific Elemelons
class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Water";
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\n${super.toString()}\nElement Index: ${this.elementIndex}`;
    }
}

class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Fire";
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\n${super.toString()}\nElement Index: ${this.elementIndex}`;
    }
}

class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Earth";
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\n${super.toString()}\nElement Index: ${this.elementIndex}`;
    }
}

class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = "Air";
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    toString() {
        return `Element: ${this.element}\n${super.toString()}\nElement Index: ${this.elementIndex}`;
    }
}

// Class Melolemonmelon
class Melolemonmelon extends Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.elements = ["Water", "Fire", "Earth", "Air"];
        this.currentElementIndex = 0;
    }

    morph() {
        this.currentElementIndex = (this.currentElementIndex + 1) % this.elements.length;
        this.element = this.elements[this.currentElementIndex];
    }
}

// Function to hold all classes and return them as an object
function createElemelons() {
    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    };
}

// Example test cases
let test = createElemelons();

try {
    let testMelon = new test.Melon(100, "Test");
} catch (e) {
    console.log(e.message); // Abstract class cannot be instantiated directly
}

let watermelon = new test.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100

let melolemonmelon = new test.Melolemonmelon(15, "Super");
console.log(melolemonmelon.toString());
// Element: Water
// Sort: Super
// Element Index: 75

melolemonmelon.morph();
console.log(melolemonmelon.toString());
// Element: Fire
// Sort: Super
// Element Index: 75

melolemonmelon.morph();
console.log(melolemonmelon.toString());
// Element: Earth
// Sort: Super
// Element Index: 75
