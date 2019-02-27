<template lang="pug">
  li.m-question
    article.m-question__inner
      h3.m-question__heading {{question.q}}
      p
        button(v-on:click="score.a++") Atom score {{ score.a }}
        button(v-on:click="score.m++") Molecule score {{ score.m }}
        button(v-on:click="score.o++") Organism score {{ score.o }}
</template>

<script>
export default {
  props: {
    question: Object,
    score: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
