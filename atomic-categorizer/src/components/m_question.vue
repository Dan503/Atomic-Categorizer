<template lang="pug">
  li.m-question
    article.m-question__inner
      h3.m-question__heading {{question.q}}
</template>

<script>
export default {
  props: {
    question: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
