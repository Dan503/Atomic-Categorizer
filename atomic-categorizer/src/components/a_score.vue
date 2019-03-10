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
  &__name {
    font-weight: bold;
  }
  // &__value {}
}
</style>
