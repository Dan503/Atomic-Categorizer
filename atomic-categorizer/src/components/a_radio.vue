<template lang="pug">
  label.a-radio
    input.a-radio__input(type='radio', :value="label", v-model="chosenValue", :name="name")
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
  computed: {
    selectionData() {
      return {
        points: this.points,
        qIndex: this.index,
        question: this.name,
        selection: this.chosenValue,
      }
    }
  },
  watch: {
    chosenValue (label) {
      this.$emit('update', this.selectionData)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
