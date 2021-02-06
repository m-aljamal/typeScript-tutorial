"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.FinishYear = 2021;
    return Department;
}());
var ItDepartment = (function (_super) {
    __extends(ItDepartment, _super);
    function ItDepartment(id, name, admins, reports) {
        var _this = _super.call(this, id, name) || this;
        _this.admins = admins;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(ItDepartment.prototype, "mostResentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value)
                throw new Error("Please add value");
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    ItDepartment.prototype.addEmployee = function (name) {
        if (name === "Samer") {
            return;
        }
        this.employees.push(name);
    };
    ItDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    ItDepartment.prototype.getReports = function () {
        console.log(this.reports);
    };
    ItDepartment.prototype.descripe = function () {
        console.log("this is abstract descripe");
    };
    return ItDepartment;
}(Department));
var it = new ItDepartment("Programming", "e2", ["Mohammad"], []);
it.descripe();
it.addEmployee("Mustafa");
it.printEmployeeInfo();
it.addReport("Finish doing css");
console.log(it);
it.getReports();
it.mostResentReport = "End of the report";
console.log(it.mostResentReport);
it.descripe();
var em1 = Department.createEmployee("Adnan");
console.log(em1);
console.log(Department.FinishYear);
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, name, office) {
        var _this = _super.call(this, id, name) || this;
        _this.office = office;
        return _this;
    }
    AccountingDepartment.prototype.descripe = function () {
        console.log(this.id, this.name);
    };
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("a2", "edc", 10);
    };
    return AccountingDepartment;
}(Department));
var accountingInstance = AccountingDepartment.getInstance();
var accountingInstance2 = AccountingDepartment.getInstance();
console.log("accountingInstance", accountingInstance);
console.log("accountingInstance", accountingInstance2);
