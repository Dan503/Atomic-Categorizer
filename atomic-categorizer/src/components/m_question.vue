<template lang="pug">
  li.m-question
    article.m-question__inner
      fieldset
        legend.m-question__heading {{question.q}}
        div(v-for="(points, label) in question.a")
          a_radio(:label="label", :name="question.q", :points="points", :index="index" @update="updateScores")
</template>

<script>
import a_radio from './a_radio';

export default {
  components: {a_radio},
  props: ['question', 'index'],
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
