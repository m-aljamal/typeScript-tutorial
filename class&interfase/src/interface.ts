console.log("*******************");
console.log("Start interface");

interface Person {
  readonly name: string;
  age: number;

  //   method
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Adnan",
  age: 4,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet(" Hi ther Ia");
console.log(user1.name);

// ? use it in class

class Adnan implements Person {
  name: string;
  age: number;
  school: number;
  constructor(n: string, ag: number, sc: number) {
    this.name = n;
    this.age = ag;
    this.school = sc;
  }
  greet() {
    console.log("hellow adnan");
  }
}

const adnan1 = new Adnan("this is new adnan", 4, 1);
adnan1.name = "fdfsd";
console.log(adnan1);

interface Page {
  name: string;
  userName?: string; // it is otional to add useName
}
