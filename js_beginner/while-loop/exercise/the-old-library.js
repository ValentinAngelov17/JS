function library(input) {
    let neededBook = input[0];
    let counter = 1;
    let found = false;

    while(true) {
        let command = input[counter];
        if (command === "No More Books") {
            break;
        } else if (command === neededBook) {
            found = true;
            console.log(`You checked ${counter - 1} books and found it.`);
            break;
        }
        counter++;

    }
    if (found != true) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter - 1} books`);
    }

}
library(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


