<template>
  <div id="app">
    <v-app>
      <Nav :routes="links" :isAuth="auth" v-on:set-logout="logoutUser" />
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
    Nav
  },
  data() {
    return {
      auth: false,
      loggedInUser: null,
      links: [
        {
          title: "Home",
          link: "/",
          icon: "mdi-home",
          reqAuth: false
        },
        {
          title: "Register",
          link: { name: "register"},
          icon: "how_to_reg",
          reqAuth: false
        },
        {
          title: "Login",
          link: { name: "login"},
          icon: "face",
          reqAuth: false
        },
        {
          title: "Logout",
          link: '',
          icon: "keyboard_return",
          reqAuth: true
        },
        {
          title: "New Entry",
          link: { name: "newForm" },
          icon: "create",
          reqAuth: true
        },
        {
          title: "Directory",
          link: { name: "Directory" },
          icon: "dashboard",
          reqAuth: true
        }
      ]
    };
  },
  methods: {
    setAuth(user) {
      this.auth = true
      this.loggedInUser = user
    },
    logoutUser() {
      this.auth = false,
      this.loggedInUser= ''
      this.$router.push({ name: 'Home'})
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: roboto;
}
</style>
