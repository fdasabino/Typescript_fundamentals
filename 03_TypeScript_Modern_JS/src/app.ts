// * Object Oriented Programming (OOP) in TypeScript

// * Classes
class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
    console.log("Department ID: " + this.id);
  }

  addEmployee(employee: string) {
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
