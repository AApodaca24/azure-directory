<template>
  <div class="card-wrapper">
    <v-row>
      <v-col cols="10" class="mx-auto" style="min-height: 100vh;width:100%">
        <v-container>
          <v-row>
            <v-flex xs12>
              <v-text-field
                outlined
                v-model="search"
                label="Search name"
                class="px-5 pt-2"
              ></v-text-field>
            </v-flex>
          </v-row>
          <div class="text-center">
            <v-pagination
              v-model="currentPage"
              :length="pageCount"
              v-on:next="this.currentPage++"
              v-on:previous="this.currentPage--"
            ></v-pagination>
          </div>
          <v-flex
            row
            wrap
            justify-center
            style="min-width:100;margin:0 auto;align-items:center;"
            class="pa-5"
          >
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
              <v-img :src="f.img" height="300"></v-img>

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
  name: 'Card',
  props: {
    faculty: Array,
  },
  data() {
    return {
      dept: this.$route.params.dept,
      perPage: 5,
      currentPage: 1,
      search: '',
      filtered: [],
    };
  },
  beforeRouteUpdate (to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log(to, from)
    this.dept = to.params.dept
    next()
  },

  methods: {
    launchUser(id) {
      this.$router.push({ name: 'User', params: { id } });
    },
  },
  computed: {
    pageCount() {
      let i = this.filteredData.length;
      let s = this.perPage;
      return Math.ceil(i / s);
    },
    filteredData() {
      const deptFaculty = this.faculty.filter(f => f.dept === this.dept);
      if (this.search.length > 0) {
        const searchFaculty = deptFaculty.filter(f =>
          f.name.toLowerCase().includes(this.search.toLowerCase()),
        );
        return searchFaculty;
      } else {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return deptFaculty.slice(start, end);
      }
    },
    randomColor() {
      return (
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      );
    },
  },
};
</script>

<style scoped></style>
