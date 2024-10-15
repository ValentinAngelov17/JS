function salaryFunction(input) {
    let tabsNumer = Number(input[0]);
    let salary = Number(input[1]);
    let sanction = 0;

    for (tab = 2; tab <= tabsNumer+1; tab++) {
        let nameOfTab = input[tab];
        switch(nameOfTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;

        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(salary);
    }

}
salaryFunction(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

