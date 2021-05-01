type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mohammad",
  privileges: ["Create-server"],
  startDate: new Date(),
};

type Com = string | number;
type Num = number | boolean;

type All = Com & Num;

function add(a: Com, b: Com) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmploye = Employee | Admin 

