<template lang="pug">
  .m-score(:class="{'-selected':selected}")
    dt.m-score__name(:aria-current="selected") {{ name }}
    dd.m-score__value {{ value }}
</template>

<script>
export default {
  props: {
    name: String,
    value: Number,
    selected: Boolean,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.m-score {
  &__name {
    font-weight: bold;
  }
  // &__value {}
}
</style>
