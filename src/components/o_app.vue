<template lang="pug">
  .o-app#app
    header.o-app__header
      h1.o-app__title
        | Atomic Categorizer
        sup  [Beta]

      a_infoBlock
        p This is an unofficial tool to help you categorize <a href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> components.
        p Answer the following quiz to help you figure out what category a particular component belongs to.

    main.o-app__main
      o_quiz(@update="updateScores")
      o_recommendation(:scores="finalScores")
      .o-app__resetWrap
        a_btn(@click="reset") Reset
    footer.o-app__footer
      a_infoBlock
        p Fork this project on #[a(href='https://github.com/Dan503/Atomic-Categorizer') GitHub]
        p This tool is intended to be used as a guide. The scoring system may not be perfect.
      .o-app__status.-visuallyHidden(role="status")
        p {{status}}
</template>

<script>
import o_quiz from "./o_quiz";
import a_infoBlock from "./a_infoBlock";
import o_recommendation from "./o_recommendation.vue";
import a_btn from './a_btn';

import events from '../helpers/global_events.js';

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
      },
      status: '',
    }
  },
  components: {
    o_quiz,
    o_recommendation,
    a_infoBlock,
    a_btn,
  },
  methods: {
    updateScores (scoreData) {
      const splitScores = update_score_arrays(this.scores, scoreData);
      const mergedScores = merge_scores(splitScores);
      this.finalScores = mergedScores;
      this.status = '';
    },
    reset() {
      events.$emit('reset');
      this.status = 'The quiz has been reset';
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

<style lang="scss" src="../main.scss"></style>

<style lang="scss">
.o-app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-bottom: 10px;

  &__title {
    sup {
      font-size: 0.6em;
    }
  }

  &__resetWrap {
    margin: 4rem auto 2rem;
    text-align: center;
  }

  &__footer {
    bottom: 0;
  }

  .o-recommendation {
    max-width: 100rem;
    margin: 0 auto 20px;

    @media (min-height: 500px) {
      position: sticky;
      bottom: 20px;
    }
  }
}
</style>
