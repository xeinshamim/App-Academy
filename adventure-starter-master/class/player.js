class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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

        // Find item in current room
        const item = this.currentRoom.getItemByName(itemName);
        if (!item) return;

        // Remove from room
        const roomIdx = this.currentRoom.items.indexOf(item);
        if (roomIdx >= 0) this.currentRoom.items.splice(roomIdx, 1);

        // Add to player inventory
        this.items.push(item);

    }

    dropItem(itemName) {

        const item = this.getItemByName(itemName);
        if (!item) return;

        const idx = this.items.indexOf(item);
        if (idx >= 0) this.items.splice(idx, 1);

        this.currentRoom.items.push(item);
    }

    eatItem(itemName) {
        const item = this.getItemByName(itemName);
        if (!item) return;

        // Only remove if it's food (duck-typed via constructor name)
        if (item.constructor && item.constructor.name === 'Food') {
            const idx = this.items.indexOf(item);
            if (idx >= 0) this.items.splice(idx, 1);
        }

    }

    getItemByName(name) {

        for (let i = 0 ; i < this.items.length ; i++) {
            if (this.items[i].name === name) return this.items[i];
        }
        return undefined;
    }
}

module.exports = {
  Player,
};
