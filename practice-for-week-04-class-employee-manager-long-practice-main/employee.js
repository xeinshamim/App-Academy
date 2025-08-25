class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        // If a manager is provided, add this employee to the manager's employees
        // list. Protect against non-manager objects.
        if (this.manager && typeof this.manager.addEmployee === 'function') {
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }
}

module.exports = Employee;
