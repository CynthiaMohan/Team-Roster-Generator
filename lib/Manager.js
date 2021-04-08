const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, phone) {
        super(name, id);
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
}

module.exports = Manager;