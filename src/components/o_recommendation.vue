<template lang="pug">
  article.o-recommendation
    a_restrictor.o-recommendation__restrictor
      .o-recommendation__inner
        h2.o-recommendation__title Current recommendation:
        m_scores.o-recommendation__list(:scores="scores", :highlight="true")
</template>

<script>
import a_score from './a_score.vue';
import a_restrictor from './a_restrictor.vue';
import m_scores from './m_scores.vue';

export default {
  components: { a_score, a_restrictor, m_scores },
  props: ['scores'],
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.o-recommendation {

  &__inner {
    background: var(--background-color);
    padding: 10px 20px;
    margin-bottom: 20px;
    box-shadow:
      0 10px 0 -5px #be6700,
      0 20px 0 -10px #66ccff,
      0 30px 0 -16px #dedcb9;
    border: 3px solid var(--black);

    display: grid;
    grid-gap: 1rem;

    @media (min-width: 850px) {
      grid-template-columns: max-content 1fr;
    }

    @media (min-width: 600px) {
      grid-gap: 20px;
    }
  }

  &__title {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>
