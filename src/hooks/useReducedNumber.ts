/**
 *	@param num number - any number (integer | float)
 *	@return array with values type of string or number. Ex: [1k, 259, 3.54M, 34, ...]
 * 	@return same number of param if it less than one thousand, else
 *  	return a reduced number. Like: 1200 return 1K, 15999 return 15.99K...
 */
export const useReducedNumber = (...numbers: number[]): (string | number)[] => {
	const reducedNumbers = numbers.map(num => {
		if (num < 1000) return num;

		const formatter = new Intl.NumberFormat('en-US', {
			notation: 'compact',
			compactDisplay: 'short',
			maximumFractionDigits: 2,
		});

		return formatter.format(num);
	});
	return reducedNumbers;
};
