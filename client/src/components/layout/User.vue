<template>
  <div class="user">
    <v-row no-gutter>
      <v-col></v-col>
      <v-col cols="8" class="mx-auto">
        <v-layout>
          <v-flex xs12>
            <v-card>
              <v-btn
                class="mx-2"
                @click="goBack"
                fab
                dark
                small
                absolute
                right
                color="primary"
              >
                <v-icon dark>keyboard_backspace</v-icon>
              </v-btn>
              <v-btn
                class="mx-2"
                @click="goBack"
                fab
                dark
                small
                absolute
                right
                color="primary"
                style="right:9%"
              >
                <v-icon dark>collections</v-icon>
              </v-btn>
              <v-row class="justify-center">
                <v-flex>
                  <v-container>
                    <v-img
                      :src="user.img"
                      :alt="user.name"
                      aspect-ratio="1"
                      contain
                    />
                  </v-container>
                </v-flex>
                <v-flex>
                  <v-container style="padding:2rem">
                    <small
                      style="letter-spacing:.2rem;text-transform:uppercase;"
                      >{{ user.rank }}</small
                    >
                    <h2>{{ user.name }}</h2>
                    <h4>{{ user.title }}</h4>
                    <br />
                    <span>{{ user.email }}</span
                    ><br />
                    <span>{{ user.phone }}</span
                    ><br />
                    <span>{{ user.loc }}</span>
                  </v-container>
                </v-flex>
              </v-row>
              <v-row>
                <v-container style="padding:0 2rem">
                  <div
                    v-html="user.bio"
                    style="line-height:2rem;letter-spacing:1px;"
                  ></div>
                </v-container>
              </v-row>
              <v-row style="padding:1rem 0 2rem 2rem">
                <v-chip v-for="(a, index) in user.hobbies" :key="index" style="margin: 0 .2rem;">
                  {{ a }}
                </v-chip>
              </v-row>
              <v-row>
                <v-container v-if="user.multiImg.length > 0">
                  <h1 class="pl-5">{{ user.name + `'s Gallery` }}</h1>
                </v-container>
              </v-row>
              <v-row>
                <v-container fluid v-if="user.multiImg.length > 0">
                  <v-row>
                    <v-col
                      v-for="(img, index) in user.multiImg"
                      :key="index"
                      class="d-flex child-flex"
                      cols="4"
                    >
                      <v-card flat tile class="d-flex">
                        <v-img
                          :src="img"
                          aspect-ratio="1"
                          class="grey lighten-2"
                        >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-row>
            </v-card>
          </v-flex>
        </v-layout>
      </v-col>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    faculty: Array
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    user() {
      const filtered = this.faculty.filter(f => f._id === this.id);
      return filtered[0];
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    navigateto() {
      this.$router.push({
        name: "department",
        params: { dept: this.user.dept }
      });
    }
  }
};
</script>

<style scoped>
.user {
  position: relative;
}

.img {
  height: 100%;
  /* width: 33%; */
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
