<template>
  <div class="card-wrapper">
    <v-row>
      <v-col cols="10" class="mx-auto">
        <v-container>
          <v-flex row wrap xs12>
            <v-card
              max-width="250"
              class="mx-auto ma-2"
              v-for="f in filteredData"
              :key="f.id"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">
                    <small style="font-size:.8rem;letter-spacing:.3rem;text-transform:uppercase;">{{ f.rank}}</small><br>
                    {{
                     f.name
                  }}</v-list-item-title>
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
    };
  },
  methods: {
    launchUser(id) {
      this.$router.push({ name: "User", params: { id } });
    },
  },
  computed: {
    filteredData() {
      return this.faculty.filter((f) => f.dept === this.dept);
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
