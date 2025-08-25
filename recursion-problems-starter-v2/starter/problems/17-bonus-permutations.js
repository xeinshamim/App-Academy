/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  if (array.length === 0) {
    return [[]];
  }

  const firstElement = array[0];
  const restPerms = permutations(array.slice(1));

  const result = [];

  restPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const currentPerm = [...perm.slice(0, i), firstElement, ...perm.slice(i)];
      result.push(currentPerm);
    }
  });

  return result;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
