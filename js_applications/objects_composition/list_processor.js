function listProcessor(commands) {
    let collection = [];

    const commandProcessor = {
        add(string) {
            collection.push(string);
        },
        remove(string) {
            collection = collection.filter((item) => item !== string);
        },
        print() {
            console.log(collection.join(","));
        }
    };

    commands.forEach(command => {
        const [action, value] = command.split(" "); 
        commandProcessor[action](value); 
    });
}

// Example usage:
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// Output: again,again

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
// Output: pesho,george
