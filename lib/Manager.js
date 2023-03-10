// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.constructor.name;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

// const charlie = new Manager("charlie", 2, "email.com", 15)
// console.log(charlie.getRole());

module.exports = Manager; 