const { combinations, join } = require('../combinations');
const { permutations1 } = require('../permutations');

describe('Combinations', () => {
	test('First example', () => {
		const res = join([...permutations1(combinations('10*'))]);
		const expected = ['100', '101'];
		expect(res).toEqual(expected);
	});
	test('Second example', () => {
		const res = join([...permutations1(combinations('*0**'))]);
		const expected = ['0000', '1000', '0010', '1010', '0001', '1001', '0011', '1011'];
		expect(res).toEqual(expected);
	});
	test('Third example', () => {
		const res = join([...permutations1(combinations('10**0'))]);
		const expected = ['10000', '10100', '10010', '10110'];
		expect(res).toEqual(expected);
	});
});