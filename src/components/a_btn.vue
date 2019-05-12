
<template>
	<button class="a-btn" @click="click">
		<slot></slot>
	</button>
</template>

<script>
export default {
	methods: {
		click(event) {
			this.$emit('click', event);
		}
	}
}
</script>

<style lang="scss">
	.a-btn {
		--btn__bg: var(--orange-strong);
		--btn__color: var(--background-color);
		--btn__border: transparent;

		background: var(--btn__bg);
		color: var(--btn__color);
		padding: 5px 20px;
		display: inline-block;
		font-family: var(--font-secondary);
		font-size: 2.4rem;
		transition: 0.3s;
		border: 3px solid var(--btn__border);
		cursor: pointer;

		&:hover {
			--btn__bg: #fff;
			--btn__color: var(--black);
			--btn__border: var(--orange-strong);
		}

		&:focus {
			--btn__border: #000;
			box-shadow: 0 0 0 1px #000;
			outline: none;
		}
	}
</style>

