const { permutations1, permutations2 } = require('../permutations');

describe('Permutations1', () => {
	test('First example', () => {
		const res = [...permutations1([[1, 3], ['a'], [4, 5]])];
		const expected = [[1, 'a', 4], [3, 'a', 4], [1, 'a', 5], [3, 'a', 5]];
		expect(res).toEqual(expected);
	});
	test('Second example', () => {
		const res = [...permutations1([['a', 'b'], [1]])];
		const expected = [['a', 1], ['b', 1]];
		expect(res).toEqual(expected);
	});
	test('Third example', () => {
		const res = [...permutations1([[100, 200, 500], ['c', 'd', 'e'], [1, 2, 10]])];
		const expected = [
			[ 100, 'c', 1 ],
			[ 200, 'c', 1 ],
			[ 500, 'c', 1 ],
			[ 100, 'd', 1 ],
			[ 200, 'd', 1 ],
			[ 500, 'd', 1 ],
			[ 100, 'e', 1 ],
			[ 200, 'e', 1 ],
			[ 500, 'e', 1 ],
			[ 100, 'c', 2 ],
			[ 200, 'c', 2 ],
			[ 500, 'c', 2 ],
			[ 100, 'd', 2 ],
			[ 200, 'd', 2 ],
			[ 500, 'd', 2 ],
			[ 100, 'e', 2 ],
			[ 200, 'e', 2 ],
			[ 500, 'e', 2 ],
			[ 100, 'c', 10 ],
			[ 200, 'c', 10 ],
			[ 500, 'c', 10 ],
			[ 100, 'd', 10 ],
			[ 200, 'd', 10 ],
			[ 500, 'd', 10 ],
			[ 100, 'e', 10 ],
			[ 200, 'e', 10 ],
			[ 500, 'e', 10 ]
		];
		expect(res).toEqual(expected);
	});
});

describe('Permutations2', () => {
	test('First example', () => {
		const res = permutations2([[1, 3], ['a'], [4, 5]]);
		const expected = [[1, 'a', 4], [1, 'a', 5], [3, 'a', 4], [3, 'a', 5]];
	});
	test('Second example', () => {
		const res = permutations2([['a', 'b'], [1]]);
		const expected = [['a', 1], ['b', 1]];
		expect(res).toEqual(expected);
	});
})