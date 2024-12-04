function createExtensibleObject() {
    return {
        extend: function (template) {
            for (let key in template) {
                if (typeof template[key] === 'function') {
                    // Add function to the prototype
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    // Add property directly to the object
                    this[key] = template[key];
                }
            }
        }
    };
}


// Create the extensible object
const myObj = createExtensibleObject();

// Define the template object
const template = {
    extensionMethod: function () {
        console.log("Hello from extensionMethod!");
    },
    extensionProperty: 'someString'
};

// Extend the object with the template
myObj.extend(template);

// Check the resulting object
console.log(myObj.extensionProperty); // Output: 'someString'
myObj.extensionMethod();              // Output: 'Hello from extensionMethod!'

// Verify the prototype
console.log(Object.getPrototypeOf(myObj).extensionMethod); // The function is on the prototype
