<template>
  <div id="app">
    <Nav :routes="links" />
    <main>
      <router-view :routes="links" />
    </main>
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
        },
        {
          title: "New Entry",
          link: { name: "newForm" },
        },
        {
          title: "Directory",
          link: { name: "Directory" },
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
}
</style>
