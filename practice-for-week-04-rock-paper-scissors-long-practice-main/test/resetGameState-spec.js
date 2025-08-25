const { expect } = require('chai');
const { resetGameState, processMove, getCPUMove } = require('../game');

describe('resetGameState()', () => {
  it('should reset wins/losses/ties/totalGames to zero', () => {
    // play a few rounds
    const cpu1 = getCPUMove();
    processMove('r', cpu1);
    const cpu2 = getCPUMove();
    processMove('p', cpu2);

    // now reset
    resetGameState();

    // require game module fresh to inspect internal state via promptInput's first console.log
    delete require.cache[require.resolve('../game')];
    const { promptInput } = require('../game');

    // create a mock rl that immediately quits to capture the first status line
    let printed = null;
    const mockRl = {
      question(prompt, cb) {
        // capture status line printed by promptInput then quit
        // promptInput already logged the status line, so we just call cb with 'q'
        cb('q');
      },
      close() {}
    };

    // spy on console.log
    const origLog = console.log;
    let logs = [];
    console.log = (msg) => logs.push(msg);

    promptInput(mockRl);

    // restore console.log
    console.log = origLog;

    expect(logs[0]).to.match(/0 wins - 0 losses - 0 ties/);
  });
});
