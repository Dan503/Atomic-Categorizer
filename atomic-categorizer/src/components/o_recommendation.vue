<template lang="pug">
  article.o-recommendation
    h2.o-recommendation__title Current recommendation
    dl.o-recommendation__list
      a_score(name="Atom", :value="scores.a", selected=true)
      a_score(name="Molecule", :value="scores.m", selected=false)
      a_score(name="Organism", :value="scores.o", selected=false)
</template>

<script>
import a_score from "./a_score.vue";

export default {
  components: { a_score },
  props: ['scores'],
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
