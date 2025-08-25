// context.js - demonstrate `this` in different call sites

function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
// call the standalone function - `this` is the global object (or undefined in strict mode)
eat(); // undefined eats fish food

/********************************* Scenario 2 *********************************/
// assign the function as a method of the object - `this` is the object
nemo.eat = eat;
nemo.eat(); // Nemo eats fish food

/********************************* Scenario 3 *********************************/
// assigning the function to the object doesn't change the global call's this
nemo.eat = eat;
eat(); // undefined eats fish food

/********************************* Scenario 4 *********************************/
// calling the class method via the instance - `this` is the instance
nemo.swim(); // Nemo swimming in the water

/********************************* Scenario 5 *********************************/
// copying the method reference into a variable and calling it - `this` is lost for class methods (they run in strict mode)
const swim = nemo.swim;
try {
  swim(); // throws: TypeError: Cannot read properties of undefined (reading 'name')
} catch (e) {
  console.log('Error calling swim():', e.message);
}
