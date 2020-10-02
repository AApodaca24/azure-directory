<template>
  <div class="home">
    <section class="showcase">
      <div class="card">
        <h1>Welcome to the Faculty Directory App</h1>
        <p>Here you can view and add members to view anywhere.</p>
        <v-alert dense type="info">
          This app is in BETA
        </v-alert>
        <div>
          <v-btn
            class="ma-2"
            v-if="isAuth"
            tile
            color="rgb(0, 43, 92)"
            :to="{ name: 'Directory' }"
            >Directory</v-btn
          >
          <v-btn
            class="ma-2"
            v-if="isAuth"
            tile
            color="rgb(0, 43, 92)"
            @click="$msal.signOut()"
            >Logout</v-btn
          >
        </div>
        <v-flex xs12 v-if="!isAuth">
          <v-container style="display:flex;flex-direction:column;margin-top:0;">
            <p>Sign in with Microsoft</p>
            <v-btn tile dark color="rgb(0, 43, 92)" @click="$emit('set-auth')">
              <v-icon left>mdi-microsoft</v-icon> Sign-In
            </v-btn>
          </v-container></v-flex
        >
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: {
    routes: Array,
    isAuth: Boolean,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.home {
  min-height: 90vh;
  min-width: 100vw;
  position: relative;
}

.showcase {
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.card {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.8em;
}

.card div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1.2em;
}
</style>
