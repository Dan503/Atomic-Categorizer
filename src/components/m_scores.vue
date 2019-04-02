
<template lang="pug">
	dl.m-scores
		- var values = { a: 'Atom', m: 'Molecule', o: 'Organism' }
		each name, letter in values
			a_score.m-scores__score(name=name, :value=`scores.${letter}`, :selected=`selected.${letter}`)
</template>

<script>
import a_score from './a_score.vue';

export default {
	components: { a_score },
	props: {
		scores: {
			type: Object,
			default: ()=> ({ a: 0, m: 0, o: 0 }),
		},
		highlight: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		selected() {
			const defaultObj = {a:false, m:false, o:false};
			if (!this.highlight) return defaultObj;

			const keys = Object.keys(this.scores);
			const values = Object.values(this.scores);
			const highestScore = Math.max(...values);
			const highScores = values.filter((score) => score === highestScore);

			const highScoreIndex = values.indexOf(highestScore);
			const highScoreKey = keys[highScoreIndex];

			let returnObj = {...defaultObj};

			if (highScores.length === 1) {
				returnObj[highScoreKey] = true;
			}

			return returnObj;
		}
	}
};

</script>

<style lang="scss">
	.m-scores {
		margin: 0;
		width: 100%;
		display: grid;

		@media (min-width: 600px) {
			grid-gap: 20px;
			grid-template-columns: repeat(3, auto);
		}

		@media (max-width: 599px) {
			display: table;

			.a-score {
				display: table-row;

				+ .a-score {
					box-shadow: 0 -1px 0 0 var(--orange-strong);
				}

				&__name, &__value {
					display: table-cell;
					padding: 5px 10px;
				}

				&__name {
					text-align: left;
				}
			}
		}
	}
</style>

