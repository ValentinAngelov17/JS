class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {

        if (!username || !salary || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (salary < 0) {
            throw new Error(" Invalid input!")
        }
        let newDepartment = true;
        let departmentIndex = 0;

        for (let index = 0; index < this.departments.length; index++) {
            const element = this.departments[index];
            if (element.department === department) {
                newDepartment = false;
                departmentIndex = index;
            };

        }


        if (newDepartment) {
            this.departments.push({
                department,
                employees: [{
                    username,
                    salary,
                    position
                }]
            })
        } else {
            this.departments[departmentIndex].employees.push({ username, salary, position });
        }


        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment() {
        let result = "";
        let department = '';
        let departmentIndex = 0;
        let bestSalary = -Infinity;
        for (let index = 0; index < this.departments.length; index++) {
            let departmentSalary = 0;
            const element = this.departments[index];
            element.employees.forEach(depEmployee => {
                departmentSalary += depEmployee.salary;
            });
            departmentSalary = departmentSalary / element.employees.length;
            if (departmentSalary > bestSalary) {
                bestSalary = departmentSalary;
                department = element.department;
                departmentIndex = index;
            }

        }
        result += `Best department is: ${department}\n`;
        result += `Average salary: ${bestSalary}\n`;
        this.departments[departmentIndex].employees.sort((a, b) => b.salary - a.salary);
        console.log(this.departments[departmentIndex].employees);
        this.departments[departmentIndex].employees.forEach(element => {
            result += `${element.username} ${element.salary} ${element.position}\n`
        });

        return result



    }

}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());