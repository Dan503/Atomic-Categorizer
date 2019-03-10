<template lang="pug">
  article.m-question
    fieldset.m-question__fieldset
      legend.m-question__legend {{question.q}}
      ul.m-question__answers
        li.m-question__answer(v-for="(points, label) in question.a")
          a_radio( :label="label", :name="question.q", :points="points", :index="index" @update="updateScores")
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

.m-question {

  &__scores {
    @media (min-width: 600px) {
      display: flex;
      justify-content: center;
    }

    .a-score {
      margin: 0 20px;
    }
  }

  &__fieldset {
    border: 0;
  }

  &__legend {
    // font-family: var(--font-secondary);
    font-weight: bold;
    font-size: 1.2em;
  }

  &__answers {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 80ch;
    margin: 1.5rem auto 0;
  }

  &__answer {
    margin: 5px;
  }
}

</style>
