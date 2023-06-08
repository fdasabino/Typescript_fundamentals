"use strict";
class Department {
    id;
    name;
    restrictedEmployees = [];
    employees = [];
    constructor(id, n) {
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name} (${this.id})`);
    }
    addRestrictedEmployee(employee) {
        if (!this.restrictedEmployees.includes(employee)) {
            this.restrictedEmployees.push(employee);
        }
    }
    addEmployee(employee) {
        if (this.restrictedEmployees.includes(employee)) {
            console.warn(`${employee} is a bad employee and cannot be added`);
            return;
        }
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        for (const employee of this.employees) {
            console.log(`Total ${this.employees.length} employees: ${employee}`);
        }
    }
    static createEmployee(name) {
        return { name: name };
    }
}
const accounting = new Department("D1", "Accounting");
class ITDepartment extends Department {
    reports;
    admins;
    lastReport;
    constructor(id, admins, reports) {
        super(id, "IT");
        this.reports = reports;
        this.admins = admins;
        this.lastReport = reports[0];
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log("Reports:");
        console.table(this.reports);
    }
    addEmployee(name) {
        if (this.restrictedEmployees.includes(name)) {
            console.warn(`${name} is a bad employee and cannot be added`);
            return;
        }
        if (this.employees.includes(name)) {
            console.warn(`${name} is already an employee`);
            return;
        }
        this.employees.push(name);
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }
}
const IT = new ITDepartment("D2", ["Frank Sabino"], []);
IT.addReport("Something went wrong...");
IT.addReport("Something went wrong again ...");
IT.mostRecentReport = "Something went wrong for the third time ...";
IT.mostRecentReport = "Something went wrong for the fourth time ...";
IT.addRestrictedEmployee("Kevin Johnson");
IT.addEmployee("Kevin Johnson");
IT.addEmployee("Frank Sabino");
IT.addEmployee("John Paul Jones");
IT.printReports();
console.log(IT);
