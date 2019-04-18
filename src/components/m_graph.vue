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
export default {
  props: ['scores'],
  computed: {
    highest() {
      const { a, m, o } = this.scores;
      const highestValue = Math.max(a, m, o);
      const highestKey = Object.keys(this.scores).reduce((a, b) => this.scores[a] > this.scores[b] ? a : b);
      const highScores = [a,m,o].filter(value => value === highestValue);

      return {
        key: highestKey,
        value: highestValue,
        isDraw: highScores.length > 1,
      }
    },
    isHighest(){
      const highest = key => this.highest.key === key && !this.highest.isDraw;
      return {
        a: highest('a'),
        m: highest('m'),
        o: highest('o'),
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
