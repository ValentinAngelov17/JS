function createComputerHierarchy() {
    // Base class for shared functionality
    class Device {
        constructor(manufacturer) {
            if (new.target === Device) {
                throw new Error("Cannot instantiate an abstract class.");
            }
            this.manufacturer = manufacturer;
        }
    }

    // Keyboard class
    class Keyboard extends Device {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    // Monitor class
    class Monitor extends Device {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    // Battery class
    class Battery extends Device {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    // Abstract Computer class
    class Computer extends Device {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Cannot instantiate an abstract class.");
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    // Laptop class
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery; // Use setter for validation
        }

        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)) {
                throw new TypeError("Battery must be an instance of the Battery class.");
            }
            this._battery = value;
        }
    }

    // Desktop class
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard; // Use setter for validation
            this.monitor = monitor;   // Use setter for validation
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError("Keyboard must be an instance of the Keyboard class.");
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError("Monitor must be an instance of the Monitor class.");
            }
            this._monitor = value;
        }
    }

    // Return an object containing all the classes
    return {
        Device,
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    };
}
