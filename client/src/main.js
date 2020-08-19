import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import router from "./router";
import vuetify from "../src/plugins/vuetify";

import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
