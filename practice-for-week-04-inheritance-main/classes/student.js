const Person = require('./person');

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(studentA, studentB) {
    if (studentA.GPA > studentB.GPA) {
      return `${studentA.firstName} ${studentA.lastName} has the higher GPA.`;
    } else if (studentB.GPA > studentA.GPA) {
      return `${studentB.firstName} ${studentB.lastName} has the higher GPA.`;
    } else {
      return "Both students have the same GPA";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}