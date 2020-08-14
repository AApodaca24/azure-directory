<template>
  <div>
    <vs-navbar collapse v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          myAF
        </vs-navbar-title>
      </div>

      <vs-navbar-item >
        <router-link to="/">Home</router-link>
      </vs-navbar-item>
       <vs-navbar-item >
        <router-link to="/new">New</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped></style>
