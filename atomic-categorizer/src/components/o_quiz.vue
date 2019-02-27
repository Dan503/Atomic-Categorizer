<template lang="pug">
  article.o-quiz
    header.o-quiz__head
      h2.o-quiz__heading Atomic quiz
      p Answer the following quiz to figure out what Atomic Design category a particular component should be categorized into.
    ol.o-quiz__list
      m_question(v-for="question in questions" :question="question" :key="question.q" :score="score")
</template>

<script>
import questions from '../questions.js';
import m_question from './m_question.vue';

export default {
  data: ()=> ({questions}),
  components: { m_question },
  props: ['score']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
