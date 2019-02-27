<template lang="pug">
  div#app
    header
      h1 Atomic Categorizer
    main
      o_quiz(:score="score")
    footer
      o_recommendation(:score="score")
</template>

<script>
import o_quiz from "./components/o_quiz";
import o_recommendation from "./components/o_recommendation.vue";

export default {
  name: "app",
  data: ()=> ({
    score: {
      a: 0,
      m: 0,
      o: 0,
    }
  }),
  components: {
    o_quiz,
    o_recommendation
  }
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
