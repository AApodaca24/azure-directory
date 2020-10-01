import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "../src/plugins/vuetify";
import msal from 'vue-msal'

import "material-icons/iconfont/material-icons.css";
import store from "./store";

Vue.use(msal, {
  auth: {
    clientId: "1842986c-51df-4ca7-96d7-58a267b19a04",
    postLogoutRedirectUri: "https://dfdirectory.azurewebsites.net/",
    redirectUri: "https://dfdirectory.azurewebsites.net/",
    navigateToLoginRequestUrl: false
  },
  framework: {
    globalMixin: true
  }
})
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
