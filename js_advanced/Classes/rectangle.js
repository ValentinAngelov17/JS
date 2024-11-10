class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    calcArea() {
        return this.height * this.width;
    }
}


const rect = new Rectangle(5, 4, 'yellow');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea())