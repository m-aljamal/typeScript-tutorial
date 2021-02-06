abstract class Department {
  //   name: string;             can add this initial values in the constructor
  //   private employees: string[] = [];
  static FinishYear = 2021; // can accssess without creating new opject new
  protected employees: string[] = [];
  constructor(public name: string, protected readonly id: string) {
    // readonly will not changed
    // this.name = n;      we initail the name vale in parameter
  }
  abstract descripe(this: Department): void; // this sould implement in the class inheritance

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  //   static method
  static createEmployee(name: string) {
    return { name };
  }
}

// const accounting = new Department("Accounting", "e1");

// accounting.descripe();

// accounting.addEmployee("Mohammad");

// accounting.addEmployee("omer");

// accounting.printEmployeeInfo();

// console.log(accounting);

/**
 * ?if we have something deferent for each department for example
 * accounting department need reports
 * it department need admistartors
 *  inhartens help to do that
 */

class ItDepartment extends Department {
  private lastReport: string;

  get mostResentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostResentReport(value: string) {
    if (!value) throw new Error("Please add value");
    this.addReport(value);
  }
  constructor(
    id: string,
    name: string,
    public admins: string[],
    private reports: string[]
  ) {
    super(id, name);
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Samer") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
  descripe() {
    console.log("this is abstract descripe");
  }
}

const it = new ItDepartment("Programming", "e2", ["Mohammad"], []);
it.descripe();
// console.log(it.mostResentReport);

it.addEmployee("Mustafa");
it.printEmployeeInfo();
it.addReport("Finish doing css");
// it.addEmployee("Samer") will not be added
console.log(it);

it.getReports();
it.mostResentReport = "End of the report";
console.log(it.mostResentReport);

it.descripe();
// static method

const em1 = Department.createEmployee("Adnan");
console.log(em1);

console.log(Department.FinishYear);


// ? can only have one instance
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private constructor(id: string, name: string, public office: number) {
    super(id, name);
  }

  descripe() {
    console.log(this.id, this.name);
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("a2", "edc", 10)
  }
}

 const accountingInstance = AccountingDepartment.getInstance()
 const accountingInstance2 = AccountingDepartment.getInstance()
 console.log("accountingInstance",accountingInstance);
 console.log("accountingInstance",accountingInstance2);
 