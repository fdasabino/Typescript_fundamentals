"use strict";
class Department {
    id;
    name;
    employees = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log("Department: " + this.name);
        console.log("Department ID: " + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("Number of employees: ", this.employees.length);
        console.log("Employees list: ", this.employees);
    }
}
const accounting = new Department("Acc", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Manuel");
accounting.describe();
accounting.printEmployeeInformation();
console.log(accounting);
