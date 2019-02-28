<template lang="pug">
  label.a-radio
    input.a-radio__input(type='radio', :value="value", v-model="picked", :name="name", v-on:change="")
    span.a-radio__label {{label}}
</template>

<script>
export default {
  props: ['value', 'name', 'label', 'picked', 'points'],
  methods: {
    update_points(){
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
