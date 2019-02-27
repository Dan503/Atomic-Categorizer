<template lang="pug">
  div#app
    header
      h1 Atomic Categorizer
    main
      HelloWorld(msg="Welcome to Your Vue.js App")
    footer
      o_recommendation(atom="1", molecule="2", organism="3")
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import o_recommendation from "./components/o_recommendation.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    o_recommendation
  }
};
</script>

<style lang="scss" src="./main.scss"></style>

<style lang="scss">
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
