const readline = require('readline');
const chalk = require('chalk');

// Disable chalk colors during tests or when module is required by another module
if (typeof require !== 'undefined' && require.main !== module) {
  try { chalk.level = 0; } catch (e) {}
}

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;
let totalGames = 0; // Track total games played

function resetGameState() {
  wins = 0;
  losses = 0;
  ties = 0;
  totalGames = 0;
}

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
}

function getWinner(move1, move2) {
  if (move1 === move2) {
    return 0; // Tie
  } else if (VALID_MOVES[move1].winsAgainst === move2) {
    return 1; // move1 wins
  } else {
    return -1; // move1 loses
  }
}

function getCPUMove() {
  const validMoveKeys = Object.keys(VALID_MOVES);
  const randomIndex = Math.floor(Math.random() * validMoveKeys.length);
  return validMoveKeys[randomIndex];
}

function processMove(cmd, cpu) {
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  const result = getWinner(cmd, cpu);
  totalGames++; // Increment total games played

  if (result === 0) {
    console.log(chalk.yellow("You tie.\n"));
    ties++;
  } else if (result === 1) {
    console.log(chalk.green("You win!\n"));
    wins++;
  } else {
    console.log(chalk.red("You lose...\n"));
    losses++;
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);
  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log('\nHelp:\n');
      printHelp();
    } else if (cmd === 'q') {
      rl.close();
      return;
    } else if (VALID_MOVES[cmd]) {
      const cpu = getCPUMove();
      processMove(cmd, cpu);
    } else {
      console.log('\nInvalid command.\n');
      printHelp();
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log(chalk.cyan("Welcome to Rock/Paper/Scissors!\n"));
  printHelp();
  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput,
  resetGameState
};