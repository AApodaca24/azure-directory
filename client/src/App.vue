<template>
  <div id="app">
    <v-app>
      <Nav :routes="links" />
      <v-main>
        <router-view :routes="links" />
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
      links: [
        {
          title: "Home",
          link: "/",
          icon: "mdi-home",
        },
        {
          title: "New Entry",
          link: { name: "newForm" },
          icon: "create",
        },
        {
          title: "Directory",
          link: { name: "Directory" },
          icon: "dashboard",
        },
      ],
    };
  },
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
