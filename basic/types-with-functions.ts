function add(n1: number, n2: number): number {
  return n1 + n2;
}

let combineValue: (a: number, b: number) => number;

combineValue = add;
//! combineValue = 5 will get error becase it is a function
console.log(combineValue(5, 15));

// ? with call back

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const res = n1 + n2;
  cb(res);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

function genreateError(message: string, code: number): never {
  throw { message, code };
}
