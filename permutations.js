/**
 * Gets all the permutations between the arr's subarrays
 * @param {Array<Array<string>>} arr
 */
function *permutations1(arr) {
	const [head, ...tail] = arr;
	const rest = tail.length ? permutations1(tail) : [[]];
	for (let r of rest) {
		for (let h of head) {
			yield [h, ...r];
		};
	};
}

/**
 * Gets all the permutations between the arr's subarrays
 * @param {Array<Array<string>>} arr
 */
function permutations2(arr) {
	if (arr.length < 2) return arr;
	const [...children] = arr;
  return [...children].reduce((a, b) =>
  	a.map(x => b.map(y => x.concat(y))).reduce((a, b) => a.concat(b), []), [[]]);
}

module.exports = {
	permutations1,
	permutations2
};
