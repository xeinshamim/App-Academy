// Your code here

const FriendlyDragon = require("./classes/friendly-dragon");
const EvilDragon = require("./classes/evil-dragon");

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster",
  ],
  "Bastian"
);

const smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village",
  ],
  "Dwarf King"
);

const allDragons = [falkor.name, smaug.name];

try {
  module.exports = {
    falkor,
    smaug,
    allDragons,
  };
} catch {
  module.exports = null;
}