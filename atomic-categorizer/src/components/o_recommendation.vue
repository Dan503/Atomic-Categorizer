<template lang="pug">
  article.o-recommendation
    h2.o-recommendation__title Current recommendation
    dl.o-recommendation__list
      m_score(name="Atom", :value="finalScore.a", selected=true)
      m_score(name="Molecule", :value="finalScore.m", selected=false)
      m_score(name="Organism", :value="finalScore.o", selected=false)
</template>

<script>
import m_score from "./m_score.vue";

export default {
  components: {
    m_score
  },
  props: ['score'],
  computed: {
    finalScore() {
      const scores = this.$root.scores;
      const mergedScores = mergeScores(scores);
      return mergedScores;
    }
  }
};

function mergeScores (scores) {
  let finalScores = {};
  for (const key in scores) {
    if (scores.hasOwnProperty(key)) {
      const categoryScores = scores[key];
      const combinedScore = categoryScores.reduce((score, sum) => sum + score, 0);
      finalScores[key] = combinedScore;
    }
  }
  return finalScores;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
