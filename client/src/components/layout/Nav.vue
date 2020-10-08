<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>

      <v-btn v-if="isAuth" @click="$msal.signOut()" color="rgb(0, 43, 92)"
        >Logout</v-btn
      >
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
          >
            <v-list-item-icon class="pr-2">
              <v-icon>{{ r.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="padding-left:1em;">{{
              r.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

        <v-menu offset-y v-if="isAuth" max-height="600">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-if="isAuth" v-on="on" v-bind="attrs">
              <v-list-item-icon class="pr-2">
                <v-icon>bookmark</v-icon>
              </v-list-item-icon>
              <v-list-item-title style="padding-left:1em;">
                Departments menu
              </v-list-item-title>
            </v-list-item>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in deptsEnum"
              :key="index"
              @click="navigate(item)"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list>
      <v-switch
        v-model="$vuetify.theme.dark"
        @change="$emit('set-theme')"
        hide-details
        inset
        label="Toggle Dark Mode"
        class="ml-5"
      ></v-switch>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    routes: Array,
    isAuth: Boolean,
    dark: Boolean,
  },
  data() {
    return {
      drawer: false,
      deptsEnum: [
        'DF',
        'DFAN',
        'DFAS',
        'DFB',
        'DFBL',
        'DFC',
        'DFCE',
        'DFCS',
        'DFEC',
        'DFEG',
        'DFEI',
        'DFME',
        'DFENG',
        'DFF',
        'DFIP',
        'DFH',
        'DFK',
        'DFL',
        'DFLIB',
        'DFM',
        'DFMI',
        'DFMS',
        'DFP',
        'DFPS',
        'DFPY',
        'DFR',
        'DFS',
      ],
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
    navigate(item) {
      this.$router.push({ name: 'department', params: { dept: item } });
    },
  },
  computed: {
    authRoutes() {
      let auth = this.routes.filter(route => route.reqAuth === this.isAuth);
      return auth;
    },
  },
};
</script>

<style scoped></style>
