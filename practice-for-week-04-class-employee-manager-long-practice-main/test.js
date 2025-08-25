const assert = require('assert');
const Manager = require('./manager');
const Employee = require('./employee');

// Build company
const Hobbes = new Manager('Hobbes', 1000000, 'Founder');
const Calvin = new Manager('Calvin', 130000, 'Director', Hobbes);
const Susie = new Manager('Susie', 100000, 'TA Manager', Calvin);
const Lily = new Employee('Lily', 90000, 'TA', Susie);
const Clifford = new Employee('Clifford', 90000, 'TA', Susie);

const multiplier = 0.05;

const results = [
  { person: Hobbes, expected: 70500 },
  { person: Calvin, expected: 20500 },
  { person: Susie, expected: 14000 },
  { person: Lily, expected: 4500 },
  { person: Clifford, expected: 4500 }
];

for (const { person, expected } of results) {
  const bonus = person.calculateBonus(multiplier);
  console.log(`${person.name} bonus:`, bonus);
  assert.strictEqual(bonus, expected, `${person.name} expected ${expected} but got ${bonus}`);
}

console.log('All bonuses are correct.');
