<template lang="pug">
  form.o-quiz
    a_restrictor.o-quiz__restrictor
      ol.o-quiz__list
        li.o-quiz__item(v-for="(question, index) in questions")
          m_question(:index="index" :question="question" :key="question.q")
</template>

<script>
import questions from "../questions.js";
import m_question from "./m_question.vue";
import a_restrictor from "./a_restrictor.vue";

export default {
  data: () => ({ questions }),
  components: { m_question, a_restrictor },
  props: ["scores"]
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
