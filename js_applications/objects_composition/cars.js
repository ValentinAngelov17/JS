function carManager(commands) {
    const objects = {}; // Store all created objects

    return commands.forEach(command => {
        const [action, name, param1, param2] = command.split(" ");

        if (action === "create") {
            if (param1 === "inherit") {
                // Create a new object that inherits from another
                objects[name] = Object.create(objects[param2]);
            } else {
                // Create a plain object
                objects[name] = {};
            }
        } else if (action === "set") {
            // Set a property on the specified object
            objects[name][param1] = param2;
        } else if (action === "print") {
            // Collect properties from own and inherited objects
            const result = [];
            for (let key in objects[name]) {
                result.push(`${key}:${objects[name][key]}`);
            }
            console.log(result.join(", "));
        }
    });
}

// Example usage
carManager([
    "create c1",
    "create c2 inherit c1",
    "set c1 color red",
    "set c2 model new",
    "print c1",
    "print c2"
]);
