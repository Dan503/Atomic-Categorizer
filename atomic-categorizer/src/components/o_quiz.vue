<template lang="pug">
  article.o-quiz
    header.o-quiz__head
      h2.o-quiz__heading Atomic quiz
      p Answer the following quiz to figure out what Atomic Design category a particular component should be categorized into.
    form
      ol.o-quiz__list
        m_question(v-for="(question, index) in questions" :index="index" :question="question" :key="question.q" @update="updateScores")
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
</style>
