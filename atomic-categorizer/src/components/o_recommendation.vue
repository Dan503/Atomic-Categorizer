<template lang="pug">
  article.o-recommendation
    h2.o-recommendation__title Current recommendation
    dl.o-recommendation__list
      a_score(name="Atom", :value="scores.a", :selected="selected.a")
      a_score(name="Molecule", :value="scores.m", :selected="selected.m")
      a_score(name="Organism", :value="scores.o", :selected="selected.o")
</template>

<script>
import a_score from "./a_score.vue";

export default {
  components: { a_score },
  props: ['scores'],
  computed: {
    selected() {
      const keys = Object.keys(this.scores);
      const values = Object.values(this.scores);
      const highestScore = Math.max(...values);
      const highScores = values.filter((score) => score === highestScore);

      const highScoreIndex = values.indexOf(highestScore);
      const highScoreKey = keys[highScoreIndex];

      let returnObj = {a:false, m:false, o:false};

      if (highScores.length === 1) {
        returnObj[highScoreKey] = true;
      }

      return returnObj;
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
