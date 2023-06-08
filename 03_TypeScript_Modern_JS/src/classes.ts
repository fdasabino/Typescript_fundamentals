// Object Oriented Programming (OOP) in TypeScript
// "Real world" entities are represented as objects
// Classes are blueprints for objects (properties and methods) making the creation of objects easier

// Creating a Class
class Department {
  // Properties
  private readonly id: string;
  private name: string;
  protected restrictedEmployees: string[] = [];
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  // Methods
  describe(this: Department) {
    console.log(`Department: ${this.name} (${this.id})`);
  }

  addRestrictedEmployee(employee: string) {
    if (!this.restrictedEmployees.includes(employee)) {
      this.restrictedEmployees.push(employee);
    }
  }

  addEmployee(employee: string) {
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

  // Static method allows us to call the method without instantiating the class
  static createEmployee(name: string) {
    return { name: name };
  }
}

// Creating a new instance of the class (DEPARTMENT) using the new keyword and the constructor
const accounting = new Department("D1", "Accounting");

// Inheritance
// Creating a Class using Inheritance (IT DEPARTMENT)
class ITDepartment extends Department {
  admins: string[];
  lastReport: string;

  constructor(id: string, admins: string[], private reports: string[]) {
    super(id, "IT");
    this.admins = admins;
    this.lastReport = reports[0];
  }

  // Methods
  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log("Reports:");
    console.table(this.reports);
  }

  // Overriding Methods (addEmployee method from the parent class)
  addEmployee(name: string) {
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

  // Getters and Setters
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
}

// Creating a new instance of the inherited class (IT DEPARTMENT)
const IT = new ITDepartment("D2", ["Frank Sabino"], []);
IT.addReport("Something went wrong...");
IT.addReport("Something went wrong again ...");

IT.mostRecentReport = "Something went wrong for the third time ...";
IT.mostRecentReport = "Something went wrong for the fourth time ...";

// Testing methods and properties of IT Department class
IT.addRestrictedEmployee("Kevin Johnson");
IT.addEmployee("Kevin Johnson");
IT.addEmployee("Frank Sabino");
IT.addEmployee("John Paul Jones");

IT.printReports();
console.log(IT);
