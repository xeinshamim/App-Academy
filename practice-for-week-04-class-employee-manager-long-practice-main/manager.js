const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        // Sum salaries of direct employees. If a direct employee is a Manager,
        // recursively add their sub salaries as well.
        let sum = 0;
        for (const emp of this.employees) {
            sum += emp.salary;
            if (emp instanceof Manager) {
                sum += emp._totalSubSalary();
            }
        }
        return sum;
    }

    calculateBonus(multiplier) {
        // Bonus for manager is (own salary + totalSubSalary) * multiplier
        const total = this.salary + this._totalSubSalary();
        return total * multiplier;
    }
}

module.exports = Manager;
