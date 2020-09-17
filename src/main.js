import Vue from "vue";
import App from "./App.vue";
//import Vuex from "vuex";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon",
  defaultIconPack: "fas",
});
Vue.config.productionTip = false;

import store from "./store.js";

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
