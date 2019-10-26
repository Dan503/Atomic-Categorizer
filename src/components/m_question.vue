<template lang="pug">
  article.m-question(:aria-labelledby="legendID")
    fieldset.m-question__fieldset
      legend.m-question__legend(:id="legendID") {{question.q}}
      ul.m-question__answers
        li.m-question__answer(v-for="(points, label) in question.a")
          a_radio(:describedby="descID" :label="label", :name="question.q", :points="points", :index="index" @update="updateScores" :selections="selections")
      div(:id="descID")
        m_scores.m-question__scores(v-if="scores", :scores="scores")
</template>

<script>
import events from "../helpers/global_events";
import a_radio from "./a_radio";
import a_score from "./a_score";
import m_scores from "./m_scores";

export default {
  data() {
    return {
      scores: false
    };
  },
  components: { a_radio, a_score, m_scores },
  props: ["question", "index", "selections"],
  computed: {
    baseID() {
      return this.question.q.replace(/\W/g, "");
    },
    descID() {
      return `description-${this.baseID}`;
    },
    legendID() {
      return `legend-${this.baseID}`;
    }
  },
  methods: {
    updateScores(scoreData) {
      events.$emit("update", scoreData);
      this.scores = scoreData.isReset
        ? false
        : apply_plus_signs(scoreData.points);

      function apply_plus_signs(rawScores) {
        let scores = { ...rawScores };
        Object.keys(scores).forEach(key => (scores[key] = `+${scores[key]}`));
        return scores;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.m-question {
  &__scores {
    @media (min-width: 600px) {
      display: flex;
      justify-content: center;
      padding-left: 35px;
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
    width: 100%;
    text-align: center;
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
