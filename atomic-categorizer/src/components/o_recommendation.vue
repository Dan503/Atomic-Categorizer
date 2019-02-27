<template lang="pug">
  article.o-recommendation
    h2.o-recommendation__title Current recommendation
    dl.o-recommendation__list
      m_score(name="Atom", :value="atom", selected=true)
      m_score(name="Molecule", :value="molecule", selected=false)
      m_score(name="Organism", :value="organism", selected=false)
</template>

<script>
import m_score from "./m_score.vue";

export default {
  components: {
    m_score
  },
  props: {
    atom: Number,
    molecule: Number,
    organism: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
