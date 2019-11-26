/* Write a Program to Flatten a given n-dimensional array */

const flatten = (inputArray) => {
	// Write your code here
	var positiveNumber= Infinity;
	return Array.isArray(inputArray) ? positiveNumber > 0 ? inputArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, positiveNumber - 1) : val), [])
				 : inputArray.slice() : null;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
