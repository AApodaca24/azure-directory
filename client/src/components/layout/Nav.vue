<template>
  <div>
    <vs-navbar collapse v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          myAF
        </vs-navbar-title>
      </div>
      <vs-navbar-item v-for="(r, index) in routes" :key="index" >
        <router-link :to="r.link">{{ r.title }}</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    routes: Array
  }
};
</script>

<style scoped></style>
