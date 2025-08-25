class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.health = 100;
    this.strength = 10;
    this.items = [];

  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }
  }

  die() {
    // Drop all items into current room and clear currentRoom
    if (this.currentRoom) {
      for (let i = 0; i < this.items.length; i++) {
        this.currentRoom.items.push(this.items[i]);
      }
    }
    this.items = [];
    this.currentRoom = null;
  }

}

module.exports = {
  Character,
};
