<template lang="pug">
  label.a-radio
    input.a-radio__input(type='radio', :value="label", @change="update" v-model="chosenValue", :name="name")
    span.a-radio__label {{label}}
</template>

<script>
export default {
  data(){
    return {
      chosenValue: '',
    }
  },
  props: ['name', 'label', 'points', 'index'],
  methods: {
    update() {
      this.$emit('update', this.selectionData());
    },
    selectionData() {
      return {
        points: this.points,
        qIndex: this.index,
        question: this.name,
        selection: this.chosenValue,
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
