<template lang="pug">
  article.o-quiz
    header.o-quiz__head
      h2.o-quiz__heading.-visuallyHidden Atomic quiz
      a_infoBlock
        p Answer the following quiz to figure out what <a href="http://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> category a particular component should be categorized into.
    form
      ol.o-quiz__list
        li.o-quiz__item(v-for="(question, index) in questions")
          m_question(:index="index" :question="question" :key="question.q" @update="updateScores")
</template>

<script>
import questions from '../questions.js';
import m_question from './m_question.vue';
import a_infoBlock from './a_infoBlock.vue';

export default {
  data: ()=> ({questions}),
  components: { m_question, a_infoBlock },
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
  }
</style>
