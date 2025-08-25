function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== "number") throw new Error("Input must be a number");
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  if (min > max) return [];
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

module.exports = { isFive, isOdd, myRange };