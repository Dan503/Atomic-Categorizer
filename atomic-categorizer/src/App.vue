<template lang="pug">
  div#app
    header
      h1 Atomic Categorizer
    main
      o_quiz(@update="updateScores")
    footer
      o_recommendation(:scores="scores")
</template>

<script>
import o_quiz from "./components/o_quiz";
import o_recommendation from "./components/o_recommendation.vue";

export default {
  name: "app",
  components: {
    o_quiz,
    o_recommendation
  },
  props: ['scores'],
  methods: {
    updateScores (scoreData) {
      console.log(scoreData);
      this.$emit('update', scoreData)
    }
  },
};
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
