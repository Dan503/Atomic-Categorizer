<template lang="pug">
  article.o-recommendation
    h2.o-recommendation__title Current recommendation
    dl.o-recommendation__list
      m_score(name="Atom", :value="scores.a", selected=true)
      m_score(name="Molecule", :value="scores.m", selected=false)
      m_score(name="Organism", :value="scores.o", selected=false)
</template>

<script>
import m_score from "./m_score.vue";

export default {
  components: { m_score },
  props: ['scores'],
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
