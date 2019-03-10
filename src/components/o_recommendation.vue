<template lang="pug">
  article.o-recommendation
    h2.o-recommendation__title Current recommendation:
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
<style lang="scss">

.o-recommendation {
  background: var(--background-color);
  padding: 10px 20px;
  margin: 0 20px 20px;
  box-shadow:
    0 10px 0 -5px #be6700,
    0 20px 0 -10px #66ccff,
    0 30px 0 -16px #dedcb9;
  border: 3px solid var(--black);

  display: grid;
  grid-gap: 1rem;

  @media (min-width: 1000px) {
    grid-template-columns: max-content 1fr;
  }

  @media (min-width: 600px) {
    grid-gap: 20px;
  }

  &__title {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__list {
    margin: 0;
    display: grid;

    @media (min-width: 600px) {
      grid-gap: 20px;
      grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 599px) {
      display: table;

      .a-score {
        display: table-row;

        + .a-score {
          box-shadow: 0 -1px 0 0 var(--orange-strong);
        }

        &__name, &__value {
          display: table-cell;
          padding: 5px 10px;
        }

        &__name {
          text-align: left;
        }
      }
    }
  }
}

</style>
