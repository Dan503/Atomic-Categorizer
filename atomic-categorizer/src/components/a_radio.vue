<template lang="pug">
  label.a-radio
    input.a-radio__input.-visuallyHidden(type='radio', :value="label", @change="update" v-model="chosenValue", :name="name")
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
  .a-radio {
    &__label {
      --bg: var(--orange-strong);
      --color: var(--background-color);
      --border: transparent;

      background: var(--bg);
      color: var(--color);
      padding: 5px 20px;
      display: block;
      font-family: var(--font-secondary);
      font-size: 1.5em;
      transition: 0.3s;
      border: 3px solid var(--border);
      cursor: pointer;

      input:checked + & {
        --bg: var(--black);
        --color: var(--background-color);
      }

      &:hover {
        --bg: #fff;
        --color: var(--black);
        --border: var(--orange-strong);
      }
    }

    input:focus + &__label {
        --border: #fff;
        box-shadow: 0 0 0 1px #000;
    }
  }
</style>
