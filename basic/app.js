var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 0] = "ADMIN";
    UserRole[UserRole["READ_ONLY"] = 1] = "READ_ONLY";
    UserRole[UserRole["AUTHOR"] = 2] = "AUTHOR";
})(UserRole || (UserRole = {}));
var person = {
    name: "Mohammad",
    age: 32,
    hoppies: ["code", "cooking"],
    role: [2, "author"],
    userRole: UserRole.ADMIN
};
console.log(person);
