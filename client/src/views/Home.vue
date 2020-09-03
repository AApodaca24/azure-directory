<template>
  <div class="home">
    <section class="showcase">
      <div class="card">
        <h1>Welcome to the Faculty Directory App</h1>
        <p>Here you can view and add members to view anywhere.</p>
        <div>
          <v-btn
            class="ma-2"
            tile
            color="rgb(0, 43, 92)"
            :to="{ name: 'register' }"
            dark
            >Register</v-btn
          >
          <v-btn
            class="ma-2"
            tile
            color="rgb(0, 43, 92)"
            :to="{ name: 'login' }"
            dark
            >Login</v-btn
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  props: {
    routes: Array
  }
};
</script>

<style scoped>
.home {
  min-height: 90vh;
  min-width: 100vw;
  position: relative;
}

.showcase {
  background-color: #dddddd;
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
