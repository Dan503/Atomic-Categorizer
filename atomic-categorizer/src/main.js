import Vue from "vue";
import App from "./components/o_app.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
