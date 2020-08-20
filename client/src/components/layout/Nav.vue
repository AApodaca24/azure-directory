<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>

      <v-btn v-if="isAuth" @click="logout" color="rgb(0, 43, 92)">Logout</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>myAF</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="(r, index) in authRoutes"
            :key="index"
            :to="r.link"
            @click="logout"
          >
            <v-list-item-icon class="pr-2">
              <v-icon>{{ r.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="padding-left:1em;">{{
              r.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    routes: Array,
    isAuth: Boolean,
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggle() {
      switch (this.drawer) {
        case true:
          this.drawer = false;
          break;
        case false:
          this.drawer = true;
          break;
      }
    },
    logout() {
      this.$emit("set-logout");
      
    },
  },
  computed: {
    authRoutes() {
      let auth = this.routes.filter((route) => route.reqAuth === this.isAuth);
      return auth;
    },
  },
};
</script>

<style scoped></style>
