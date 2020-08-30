import Vue from "vue";
import App from "./App.vue";
//import Vuex from "vuex";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.config.productionTip = false;

import store from "./store.js";

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
