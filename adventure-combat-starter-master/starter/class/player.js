const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    const item = this.currentRoom.getItemByName(itemName);
    if (item) {
      // remove from room
      const idx = this.currentRoom.items.indexOf(item);
      if (idx >= 0) this.currentRoom.items.splice(idx, 1);
      this.items.push(item);
    }

  }

  dropItem(itemName) {

    const item = this.getItemByName(itemName);
    if (item) {
      const idx = this.items.indexOf(item);
      if (idx >= 0) this.items.splice(idx, 1);
      this.currentRoom.items.push(item);
    }

  }

  eatItem(itemName) {

    const item = this.getItemByName(itemName);
    if (item && item instanceof Food) {
      const idx = this.items.indexOf(item);
      if (idx >= 0) this.items.splice(idx, 1);
    }

  }

  getItemByName(name) {

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) return this.items[i];
    }
    return null;

  }

  hit(name) {

    // attempt to hit an enemy in the room by name
    const enemy = this.currentRoom.getEnemyByName(name);
    if (enemy) {
      enemy.applyDamage(this.strength);
      enemy.attackTarget = this;
    }

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
