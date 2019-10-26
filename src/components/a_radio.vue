<template lang="pug">
  label.a-radio
    input.a-radio__input.-visuallyHidden(type='radio', :value="label", @change="update" @reset="reset" v-model="chosenValue", :name="name", :aria-describedby="describedby")
    span.a-radio__label.a-btn {{label}}
</template>

<script>
import a_btn from "./a_btn";
import events from "../helpers/global_events.js";

export default {
  components: { a_btn },
  created() {
    events.$on("reset", () => this.reset());
  },
  mounted() {
    if (this.selections[this.index]) this.update();
  },
  data() {
    return {
      chosenValue: this.get_url_chosen_value()
    };
  },
  props: ["name", "label", "points", "index", "describedby", "selections"],
  methods: {
    update() {
      this.$emit("update", this.selectionData());
    },
    selectionData() {
      return {
        points: this.points,
        qIndex: this.index,
        question: this.name,
        selection: this.chosenValue,
        isReset: false
      };
    },
    reset() {
      this.chosenValue = "";
      this.$emit(
        "update",
        Object.assign(this.selectionData(), {
          points: { a: 0, m: 0, o: 0 },
          isReset: true
        })
      );
    },
    get_url_chosen_value() {
      const chosenValue = this.selections[this.index];
      return chosenValue ? chosenValue : "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.a-radio {
  &__label {
    input:checked + & {
      --btn__bg: var(--black);
      --btn__color: var(--background-color);
    }
  }
  input:focus + &__label {
    --btn__border: #fff;
    box-shadow: 0 0 0 1px #000;
  }
}
</style>
