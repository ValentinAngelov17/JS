function createFigures() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        convertUnits(value) {
            const conversionRates = {
                m: 0.01,
                cm: 1,
                mm: 10
            };
            return value * conversionRates[this.units];
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this.radius = radius; // radius is always initialized in cm
        }

        get area() {
            const radiusInUnits = this.convertUnits(this.radius);
            return Math.PI * Math.pow(radiusInUnits, 2);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.convertUnits(this.radius)}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this.width = width; // width is always initialized in cm
            this.height = height; // height is always initialized in cm
        }

        get area() {
            const widthInUnits = this.convertUnits(this.width);
            const heightInUnits = this.convertUnits(this.height);
            return widthInUnits * heightInUnits;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.convertUnits(this.width)}, height: ${this.convertUnits(this.height)}`;
        }
    }

    return { Figure, Circle, Rectangle };
}

// Usage Example
const { Figure, Circle, Rectangle } = createFigures();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200
console.log(r.toString()); // Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
