
const Employee = require('./employee');

const johnWick = new Employee("John Wick", "Dog Lover");

// Call methods directly (synchronous)
johnWick.sayOccupation();

// Call methods via setTimeout and bind so `this` remains the instance
setTimeout(johnWick.sayName.bind(johnWick), 2000);
setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);


