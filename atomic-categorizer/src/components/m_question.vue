<template lang="pug">
  li.m-question
    article.m-question__inner
      fieldset
        legend.m-question__heading {{question.q}}
        div(v-for="(points, label) in question.a")
          a_radio(:label="label", :name="question.q", :points="points", :index="index" @update="updateScores")
        dl.m-question__scores(v-if="scores")
          a_score(name="Atom", :value="`+${scores.a}`")
          a_score(name="Molecule", :value="`+${scores.m}`")
          a_score(name="Organism", :value="`+${scores.o}`")
</template>

<script>
import a_radio from './a_radio';
import a_score from './a_score';

export default {
  data(){
    return {
      scores: false,
    }
  },
  components: {a_radio, a_score},
  props: ['question', 'index'],
  methods: {
    updateScores (scoreData) {
      this.$emit('update', scoreData)
      this.scores = scoreData.points;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
