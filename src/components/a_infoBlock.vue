<template lang="pug">
  .a-infoBlock
    a_restrictor.a-infoBlock__restrictor
      slot
</template>

<script>
import a_restrictor from './a_restrictor';
export default {
  components: { a_restrictor },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.a-infoBlock {
  color: var(--dim-text-color);
  font-style: italic;
}
</style>
