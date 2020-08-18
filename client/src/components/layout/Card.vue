<template>
  <div class="card-wrapper">
    <div class="row">
      <div class="col">
        <div class="card" v-for="f in filteredData" :key="f._id">
          <div class="user">
            <img :src="f.img" />
          </div>
          <div class="data">
            <h3 style="padding: 0 0 .8em 0;">{{ f.name }}</h3>
            <div class="chips">
              <vs-chip transparent color="rgb(0, 43, 92)">
                {{ f.rank }}
              </vs-chip>
              <vs-chip transparent color="rgb(0, 43, 92)">
                {{ f.dept }}
              </vs-chip>
              <vs-chip transparent color="rgb(0, 43, 92)">
                {{ f.loc }}
              </vs-chip>
            </div>
          </div>
          <div class="action">
            <vs-button
              radius
              color="rgb(0, 43, 92)"
              type="filled"
              icon="more_horiz"
              size="small"
              @click="launchUser(f._id)"
            ></vs-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    faculty: Array,
  },
  data() {
    return {
      dept: this.$route.params.dept,
    };
  },
  methods: {
      launchUser(id) {
          this.$router.push({ name: 'User', params: { id }})
      }
  },
  computed: {
    filteredData() {
      return this.faculty.filter((f) => f.dept === this.dept);
    },
  }
};
</script>

<style scoped>
.row {
  width: 100vw;
  height: 100%;
}
.col {
  display: flex;
  flex: column;
  width: 85%;
  height: 100%;
  margin: auto;
  padding: 1.2em;
  justify-content: space-evenly;
}
.card-wrapper {
  position: fixed;
  z-index: 10;
  height: 90vh;
  background-color: #a5a5a5;
}
.card {
  max-width: 220px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  padding: 1.2em;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 15px 5px #6e6e6e;
  box-shadow: 0px 0px 15px 5px #6e6e6e;
}

.user img {
  height: 200px;
  max-width: 100%;
  border-radius: 25%;
}

.chips {
  display: flex;
  width: 100;
  padding-bottom: 0.5em;
}
</style>
