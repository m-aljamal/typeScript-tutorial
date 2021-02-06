enum UserRole { // typeScript enum type
  ADMIN, //0    can custom with any number like ADMIN = 5    will be 5  or can be with text ADMIN = 'ADMIN'
  READ_ONLY, // 1
  AUTHOR, // 2
}



type Combinable = number | string 


const anyValue: any = ["d", 1];

const person: {
  name: string;
  age: number;
  hoppies: string[];
  role: [number, string]; // tuple type
  userRole: UserRole;
} = {
  name: "Mohammad",
  age: 32,
  hoppies: ["code", "cooking"],
  role: [2, "author"],
  userRole: UserRole.ADMIN,
};

console.log(person);
