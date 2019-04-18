export default function highest(scores) {
	const { a, m, o } = scores;
	const highestValue = Math.max(a, m, o);
	const highestKey = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
	const highScores = [a,m,o].filter(value => value === highestValue);

	return {
		key: highestKey,
		value: highestValue,
		isDraw: highScores.length > 1,
	}
}
