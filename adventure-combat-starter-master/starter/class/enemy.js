const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
  this.cooldown = 3000; 
  this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // pick a random exit and move there (if any)
    const exits = this.currentRoom.getExits();
    if (exits.length === 0) return;
    const randIndex = Math.floor(Math.random() * exits.length);
    const dir = exits[randIndex];
    const room = this.currentRoom.getRoomInDirection(dir);
    if (room) {
      this.currentRoom = room;
      this.cooldown += 1000;
    }
  }

  takeSandwich() {
    // take a sandwich (food) from current room if present
    const sandwich = this.currentRoom.getItemByName('sandwich');
    if (sandwich) {
      const idx = this.currentRoom.items.indexOf(sandwich);
      if (idx >= 0) this.currentRoom.items.splice(idx, 1);
      this.items.push(sandwich);
      this.alert(`${this.name} takes the sandwich.`);
      this.cooldown += 1000;
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = () => {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    if (!this.attackTarget) return;
    // attack target and set cooldown
    this.attackTarget.applyDamage(this.strength);
    this.cooldown += 1000;
    this.alert(`${this.name} attacks ${this.attackTarget.name}`);
  }

  applyDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // If player in same room, try to take sandwich or attack
    if (this.player && this.player.currentRoom === this.currentRoom) {
      // if player present and enemy has no target, take sandwich if available
      if (!this.attackTarget) {
        // try to take sandwich first
        const sandwich = this.currentRoom.getItemByName('sandwich');
        if (sandwich) {
          this.takeSandwich();
        }
      }
      // if targeting player and cooldown is 0, attack
      if (this.attackTarget === this.player && this.cooldown === 0) {
        this.attack();
      }
    }
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
