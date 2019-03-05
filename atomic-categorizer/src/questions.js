export default [
	{
		q: 'Will the component only ever be used once per page?',
		a: {
			yes: {
				o: 3,
				m: 2,
				a: 0
			},
			no: {
				o: 0,
				m: 2,
				a: 3
			}
		}
	},

	{
		q: 'Do you expect to use the component in multiple different contexts?',
		a: {
			yes: {
				o: 0,
				m: 2,
				a: 3
			},
			no: {
				o: 3,
				m: 2,
				a: 0
			}
		}
	},

	{
		q: 'What element is the outer wrapper for the component?',
		a: {
			section: {
				o: 3,
				m: 2,
				a: 0
			},
			article: {
				o: 2,
				m: 3,
				a: 0
			},
			aside: {
				o: 2,
				m: 2,
				a: 1,
			},
			nav: {
				o: 4,
				m: 1,
				a: 0
			},
			a: {
				o: 0,
				m: 2,
				a: 1,
			},
			button: {
				o: 0,
				m: 1,
				a: 4
			},
			other: {
				o: 0,
				m: 0,
				a: 0
			}
		}
	},

	{
		q: 'Does the element contain a list of repeating components?',
		a: {
			yes: {
				o: 4,
				m: 1,
				a: 0,
			},
			no: {
				o: 1,
				m: 2,
				a: 2,
			}
		}
	},

	{
		q: 'Is the component an item in a list of components?',
		a: {
			yes: {
				o: 0,
				m: 4,
				a: 1
			},
			no: {
				o: 2,
				m: 1,
				a: 2,
			}
		}
	},

	{
		q: 'Is the component large and complex?',
		a: {
			yes: {
				o: 4,
				m: 1,
				a: 0
			},
			no: {
				o: 0,
				m: 2,
				a: 3
			}
		}
	},

	{
		q: 'Does the component consist of only a single element?',
		a: {
			yes: {
				o: 0,
				m: 0,
				a: 5
			},
			no: {
				o: 2,
				m: 2,
				a: 1,
			}
		}
	}
]