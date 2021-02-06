"use strict";
function add(n1, n2) {
    return n1 + n2;
}
var combineValue;
combineValue = add;
//! combineValue = 5 will get error becase it is a function
console.log(combineValue(5, 15));
// ? with call back
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
function genreateError(message, code) {
    throw { message: message, code: code };
}
