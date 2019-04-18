<template lang="pug">
  article.o-recommendation
    a_restrictor.o-recommendation__restrictor
      .o-recommendation__inner
        h2.o-recommendation__title Current recommendation:
        m_scores.o-recommendation__scores(:scores="scores", :highlight="true")
        m_graph(:scores="scores" class="o-recommendation__graph")
</template>

<script>
import a_score from './a_score.vue';
import a_restrictor from './a_restrictor.vue';
import m_scores from './m_scores.vue';
import m_graph from './m_graph.vue';

export default {
  components: { a_score, a_restrictor, m_scores, m_graph },
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
    grid-gap: 20px;

    @media (min-width: 851px) {
      grid-template:
        "title      scores graph" /
        max-content 1fr    auto;
    }

    @media (max-width: 850px) {
      grid-template:
        "title  graph"
        "scores graph" /
        1fr     auto;
    }

    @media (max-width: 600px) {
      grid-gap: 10px;
      grid-template:
        "title title"
        "graph scores" /
        auto   1fr;
    }
  }

  &__title {
    grid-area: title;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__graph {
    grid-area: graph;
  }

  &__scores {
    grid-area: scores;
  }
}

</style>
