<template>
  <div id="app">
    <v-app>
      <Nav :routes="links" :isAuth="auth" v-on:set-logout="logoutUser" :dark="darkMode" v-on:set-theme="toggleTheme" />
      <v-main>
        <router-view :routes="links" v-on:set-auth="setAuth" :isAuth="auth" />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Nav from "./components/layout/Nav";

export default {
  components: {
    Nav,
  },
  data() {
    return {
      auth: this.$msal.isAuthenticated(),
      darkMode: false,
      loggedInUser: null,
      links: [
        {
          title: "Home",
          link: "/",
          icon: "mdi-home",
          reqAuth: false,
        },
        {
          title: "Register",
          link: { name: "register" },
          icon: "how_to_reg",
          reqAuth: false,
        },
        {
          title: "Login",
          link: { name: "login" },
          icon: "face",
          reqAuth: false,
        },
        {
          title: "New Entry",
          link: { name: "newForm" },
          icon: "create",
          reqAuth: true,
        },
        {
          title: "Directory",
          link: { name: "Directory" },
          icon: "dashboard",
          reqAuth: true,
        },
      ],
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    setAuth() {
      this.$msal.signIn();
    },
    logoutUser() {
      (this.auth = false), (this.loggedInUser = "");
      this.$router.push({ name: "Home" });
    },
    toggleTheme() {
      if (this.darkMode === false) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false
      }
    }
  },
};
</script>

<style>
@font-face {
  font-family: Cera Medium;
  src: url('../src/assets/fonts/Cera Medium (Title Font).otf');
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.application {
  font-family: Cera Medium, "Trebuchet MS", "Lucida Sans", Aria, sans-serif !important;
}
</style>
