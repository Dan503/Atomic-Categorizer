<template lang="pug">
  div#app
    header
      h1 Atomic Categorizer
    main
      o_quiz(@update="updateScores")
    footer
      o_recommendation(:scores="finalScores")
</template>

<script>
import o_quiz from "./components/o_quiz";
import o_recommendation from "./components/o_recommendation.vue";

export default {
  name: "app",
  data(){
    return {
      scores: {
        a: [],
        m: [],
        o: [],
      },
      finalScores: {
        a: 0,
        m: 0,
        o: 0,
      }
    }
  },
  components: {
    o_quiz,
    o_recommendation
  },
  methods: {
    updateScores (scoreData) {
      const splitScores = update_score_arrays(this.scores, scoreData);
      const mergedScores = merge_scores(splitScores);
      this.finalScores = mergedScores;
    }
  },
};

function update_score_arrays(scoreArrays, newScoreData) {
  for (const key in scoreArrays) {
    if (scoreArrays.hasOwnProperty(key)) {
      scoreArrays[key][newScoreData.qIndex] = newScoreData.points[key];
    }
  }
  return scoreArrays;
}

function merge_scores (scores) {
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

<style lang="scss" src="./main.scss"></style>

<style lang="scss">
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
