<template>
  <div class="card-wrapper">
    <v-row>
      <v-col cols="10" class="mx-auto" style="min-height: 100vh;width:100%">
        <v-container>
          <v-row>
            <v-flex xs12>
              <v-card>
                <v-text-field
                  v-model="search"
                  label="Search name"
                  solo
                  class="pa-5"
                ></v-text-field>
                <div  v-if="filteredData.length >= 9" class="text-center">
                  <v-pagination v-model="currentPage" :length="filteredData.length / perPage" v-on:next="this.currentPage ++" v-on:previous="this.currentPage --"></v-pagination>
                </div>
              </v-card>
            </v-flex>
          </v-row>
          <v-flex row wrap justify-center style="min-width:100;margin:0 auto;">
            <v-card
              max-width="250"
              class="ma-5"
              v-for="f in filteredData"
              :key="f.id"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    <small
                      style="font-size:.8rem;letter-spacing:.3rem;text-transform:uppercase;"
                      >{{ f.rank }}</small
                    ><br />
                    {{ f.name }}</v-list-item-title
                  >
                  <v-list-item-subtitle>{{ f.title }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-img :src="f.img" height="200"></v-img>

              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>{{ f.email }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ f.phone }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{ f.loc }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions style="justify-content:center;">
                <v-btn icon :to="{ name: 'User', params: { id: f._id } }"
                  ><v-icon color="orange darken-2">launch</v-icon></v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-container>
      </v-col>
    </v-row>
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
      perPage: 10,
      currentPage: 0,
      search: "",
    };
  },
  methods: {
    launchUser(id) {
      this.$router.push({ name: "User", params: { id } });
    },
  },
  computed: {
    pageCount() {
      let i = this.filteredData.length;
      let s = this.perPage;
      return Math.ceil(i / s);
    },
    filteredData() {
      const deptFaculty = this.faculty.filter((f) => f.dept === this.dept);
      if (this.search.length > 0) {
        const searchFaculty = deptFaculty.filter((f) =>
          f.name.toLowerCase().includes(this.search.toLowerCase())
        );
        return searchFaculty;
      } else {
        const start = this.currentPage * this.perPage;
        const end = start + this.perPage;
        return deptFaculty.slice(start, end);
      }
    },
    randomColor() {
      return (
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      );
    },
  },
};
</script>

<style scoped></style>
