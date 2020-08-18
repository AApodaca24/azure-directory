<template>
  <div class="user">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="img">
            <img :src="user.img" />
          </div>
          <div class="data">
            <div class="header">
              <small style="text-transform:uppercase;letter-spacing:.2em;">{{
                user.rank
              }}</small>
              <p>{{ user.name }}</p>
            </div>
            <div class="body">
              <p>{{ user.bio }}</p>
            </div>
            <small
              style="position:absolute;bottom:2%;text-transform:uppercase;letter-spacing:.1em;"
              >{{ "Office location: " + user.loc }}</small
            >
            <div class="btn">
              <vs-button
                color="rgb(0, 43, 92)"
                type="filled"
                size="large"
                icon="keyboard_backspace"
                @click="goBack"
              ></vs-button>
            </div>
            <div class="btn-2">
              <vs-button
                color="rgb(0, 43, 92)"
                type="filled"
                size="large"
                icon="group"
                @click="navigateto"
              ></vs-button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    faculty: Array,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    user() {
      const filtered = this.faculty.filter((f) => f._id === this.id);
      return filtered[0];
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    navigateto() {
        this.$router.push({ name: 'department', params: { dept: this.user.dept }})
    }
  },
};
</script>

<style scoped>
.user {
  position: relative;
}
.row {
  width: 100vw;
  height: 100%;
}
.col {
  display: flex;
  flex: column;
  width: 85%;
  height: 85vh;
  margin: auto;
  padding: 1.2em;
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 100%;
  height: 420px;
  display: flex;
  border: 1px solid rgb(0, 43, 92);
  border-radius: 5px;
}

.img {
  height: 100%;
  width: 33%;
}

.img img {
  height: 100%;
  width: 100%;
}

.data {
  display: flex;
  flex-flow: column;
  padding: 1.2em;
  position: relative;
}

.header p {
  font-size: 32px;
  margin-top: 0.2em;
}

.body {
  padding: 1.2em 0;
  overflow: auto;
}

.btn {
  position: absolute;
  right: 2%;
}
.btn-2 {
  position: absolute;
  right: 10%;
  justify-content: center;
}
</style>
