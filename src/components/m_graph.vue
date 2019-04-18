<template lang="pug">
  .m-graph(aria-hidden="true")
    .m-graph__chart
      - var atomicKeys = ['a','m','o']
      each key in atomicKeys
        .m-graph__column(class=`-${key}` :style=`style.${key}` :class=`{ '-isHighest': isHighest.${key} }`)
    .m-graph__labels
      each key in atomicKeys
        .m-graph__label(class=`-${key}` :class=`{ '-isHighest': isHighest.${key} }`)
          != key.toUpperCase()
</template>

<script>
import get_highest from '../helpers/get_highest.js';

export default {
  props: ['scores'],
  computed: {
    highest() {
      return get_highest(this.scores);
    },
    isHighest(){
      const isHighest = key => this.highest.key === key && !this.highest.isDraw;
      return {
        a: isHighest('a'),
        m: isHighest('m'),
        o: isHighest('o'),
      }
    },
    percentage() {
      const { a, m, o } = this.scores;
      const total = a + m + o;
      const percent = value => value / this.highest.value * 100 + '%';
      return {
        a: percent(a),
        m: percent(m),
        o: percent(o),
      }
    },
    style(){
      const style = percentage => `transform: translateY(-${percentage})`;
      return {
        a: style(this.percentage.a),
        m: style(this.percentage.m),
        o: style(this.percentage.o),
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.m-graph {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;

  &__chart {
    min-height: 5rem;
    width: 5rem;
    padding-top: 3px;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
  }

  &__column, &__label {
    transition: 0.3s;
    height: 100%;
    width: 23%;
    background: #000;
  }

  &__column {
    position: relative;
    top: 100%;

    &.-isHighest {
      background-color: var(--orange-strong);
    }
  }

  &__labels {
    display: flex;
    justify-content: space-evenly;
    width: 5rem;
  }
  &__label {
    background: transparent;

    &.-isHighest {
      font-weight: bold;
    }
  }
}
</style>
