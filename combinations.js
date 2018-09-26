/**
 * Generates few arrays which represent the future string. These arrays should be flattened with permutation function, after that the result should be joined, 
 * @param {string} str - A string that should be used to generate combinations.
 * @returns {Array<Array<string>>}
 */
function combinations(str) {
	const arr = str.split('*');
	return arr.map((item, i) => {
		if (!item && i < arr.length - 1) {
			return ['0', '1'];
		}

		if (str.endsWith(item)) {
			return [item];
		}
		else return [item + '0', item + '1'];
	});
}

/**
 * Joins subarrays in the argument array to strings
 * @param {Array<Array<string>>} input
 * @returns {Array<string>}
 */
function join(input) {
	return input.map(x => x.join(''));
}

module.exports = {
	combinations,
	join,
};
