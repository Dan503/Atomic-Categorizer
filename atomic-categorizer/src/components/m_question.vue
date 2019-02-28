<template lang="pug">
  li.m-question
    article.m-question__inner
      fieldset
        legend.m-question__heading {{question.q}}
        div(v-if="question.options")
          p has options.
          p
            button(@click="score.a++") Atom score {{ score.a }}
            button(@click="score.m++") Molecule score {{ score.m }}
            button(@click="score.o++") Organism score {{ score.o }}
        div(v-else)
          a_radio(value="true" label="Yes", :name="question.q", :points="question.true")
          a_radio(value="false" label="No", :name="question.q", :points="question.false")
</template>

<script>
import a_radio from './a_radio';

export default {
  components: {a_radio},
  // data(){
  //   const origional_score = {...this.score};

  //   for (const key in this.score) {
  //     if (object.hasOwnProperty(key)) {
  //       const old_score = origional_score[key];
  //       const modifier = this.picked ? question[this.picked][key] : 0;
  //       const new_score = old_score + question[this.picked][key];
  //       this.score[key] = new_score;
  //     }
  //   }

  //   return {}
  // },
  props: {
    question: Object,
    score: Object,
    picked: String,
  },
  methods: {
  },
  computed: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
