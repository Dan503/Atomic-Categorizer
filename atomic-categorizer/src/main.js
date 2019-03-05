import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  },
  data: {
    scores: {
      a: [],
      m: [],
      o: [],
    }
  }
}).$mount("#app");
