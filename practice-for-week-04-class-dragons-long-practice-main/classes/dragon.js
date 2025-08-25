// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...instances) {
    return instances.map((instance) => instance.name);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}