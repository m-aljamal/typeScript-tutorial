"use strict";
console.log("*******************");
console.log("Start interface");
var user1;
user1 = {
    name: "Adnan",
    age: 4,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet(" Hi ther Ia");
console.log(user1.name);
var Adnan = (function () {
    function Adnan(n, ag, sc) {
        this.name = n;
        this.age = ag;
        this.school = sc;
    }
    Adnan.prototype.greet = function () {
        console.log("hellow adnan");
    };
    return Adnan;
}());
var adnan1 = new Adnan("this is new adnan", 4, 1);
adnan1.name = "fdfsd";
console.log(adnan1);
