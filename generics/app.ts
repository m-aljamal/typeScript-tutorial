const names: Array<string> = [];

names[0].split(" ");

const numbers: Array<number> = [];

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1000); // the returned string
  }, 2000);
});

promise.then((data) => {
  data.split(" "); // not work becase the Promise retrun number if change to string it will work
});

// ? create genaric
//             T U can be any names 
function merge<T, U>(obj: T, objB: U) {
  return Object.assign(obj, objB);
}
