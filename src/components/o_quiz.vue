<template lang="pug">
  article.o-quiz
    header.o-quiz__head
      h2.o-quiz__heading.-visuallyHidden Atomic quiz
      p.o-quiz__intro Answer the following quiz to figure out what <a href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> category a particular component should be categorized into.
    form
      ol.o-quiz__list
        li.o-quiz__item(v-for="(question, index) in questions")
          m_question(:index="index" :question="question" :key="question.q" @update="updateScores")
</template>

<script>
import questions from '../questions.js';
import m_question from './m_question.vue';

export default {
  data: ()=> ({questions}),
  components: { m_question },
  props: ['scores'],
  methods: {
    updateScores (scoreData) {
      this.$emit('update', scoreData)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .o-quiz {
    &__list {
      margin: 5rem 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-gap: 5rem;
    }

    &__intro {
      color: var(--dim-text-color);
      font-style: italic;
    }
  }
</style>
