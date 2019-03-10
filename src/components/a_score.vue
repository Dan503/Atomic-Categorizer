<template lang="pug">
  .a-score(:class="{'-selected':selected}")
    dt.a-score__name(:aria-current="selected") {{ name }}
    dd.a-score__value {{ value }}
</template>

<script>
export default {
  props: ['name', 'value', 'selected']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.a-score {
  text-emphasis: center;
  // border: 3px solid transparent;
  transition: 0.5s;
  padding: 5px;

  &__name {
    font-weight: bold;
    font-family: var(--font-secondary);
    margin-bottom: 0.2em;
    font-size: 1.2em;
  }

  &__value {
    margin: 0;
    font-size: 1.5em;
  }

  &.-selected {
    background: var(--black);
    color: var(--background-color);
  }
}
</style>
