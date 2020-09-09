import Vue from "vue";
import App from "./App.vue";
import Vuesax from "vuesax";
import router from "./router";
import vuetify from "../src/plugins/vuetify";
import msal from 'vue-msal'

import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import store from "./store";

Vue.use(msal, {
  auth: {
    clientId: "7ac7882a-8b46-412d-8009-8f6455fa4dbc",
    postLogoutRedirectUri: "http://localhost:8080/",
    navigateToLoginRequestUrl: false
  },
  framework: {
    globalMixin: true
  }
})
Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
