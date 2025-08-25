/***********************************************************************
Write a function, `dynamicIntervalCount`, that accepts a callback, a delay
in milliseconds, and an optional amount as arguments. The function should
set an interval with the given callback and delay. If an amount argument
is passed, the interval should be cleared after the callback has been
called 'amount' number of times. If an amount argument is not passed,
the interval should not be cleared and `dynamicIntervalCount` should instead
return the Timeout object for the interval.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Examples:

dynamicIntervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times


const timeoutObject = dynamicIntervalCount(function() {
    console.log('hi');
}, 500); // prints 'hi' at 500ms intervals indefinitely

console.log(timeoutObject); // Timeout { ... }
***********************************************************************/

function dynamicIntervalCount(callback, delay, amount) {
  if (amount !== undefined && amount <= 0) {
    // If amount is 0 or negative, don't set up an interval
    return null;
  }

  let count = 0;
  let intervalId;

  if (amount !== undefined) {
    // If amount is specified, set up interval with clearing logic
    intervalId = setInterval(() => {
      callback();
      count++;

      if (count >= amount) {
        clearInterval(intervalId);
      }
    }, delay);
  } else {
    // If no amount is specified, set up interval without clearing logic
    intervalId = setInterval(callback, delay);
    return intervalId; // Return the actual Timeout object
  }

  return {
    _id: intervalId,
    _destroy: () => clearInterval(intervalId),
  };
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = dynamicIntervalCount;
} catch {
  module.exports = null;
}
