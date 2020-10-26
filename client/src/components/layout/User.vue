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
                color="rgb(3, 51, 178)"
              >
                <v-icon dark>keyboard_backspace</v-icon>
              </v-btn>
              <v-row class="justify-center">
                <v-flex>
                  <v-container>
                    <v-img
                      :src="user.img"
                      :alt="user.name"
                      aspect-ratio="1"
                      contain
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
                        </v-row> </template
                    ></v-img>
                  </v-container>
                </v-flex>
                <v-flex>
                  <v-container style="padding:2rem">
                    <small
                      style="letter-spacing:.2rem;text-transform:uppercase;font-size:1.2em;"
                      >{{ user.rank }}</small
                    >
                    <h2 style="font-size:2em;">{{ user.name }}</h2>
                    <h4>{{ user.title }}</h4>
                    <div class="contacts">
                      <v-btn icon large :href="`mailto:${user.email}`">
                        <v-icon>mail</v-icon>
                      </v-btn>
                      <v-btn icon large :href="`tel:${user.phone}`">
                        <v-icon>phone</v-icon>
                      </v-btn>
                      <v-btn
                        icon
                        large
                        :to="{
                          name: 'deptMap',
                          params: { dept: user.dept },
                          query: { room: user.loc },
                        }"
                      >
                        <v-icon>location_on</v-icon>
                      </v-btn>
                    </div>
                    <v-flex>
                      <v-chip
                        v-for="(a, index) in user.hobbies"
                        class="pr-4"
                        :key="index"
                        style="margin: 0 .2rem;"
                      >
                        {{ a }}
                      </v-chip>
                    </v-flex>
                  </v-container>
                </v-flex>
              </v-row>
              <v-row>
                <v-container>
                  <div
                    v-html="user.bio"
                    class="px-10"
                    style="line-height:2rem;letter-spacing:1px;font-weight:700;"
                  ></div>
                </v-container>
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
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      id: this.$route.params.id,
      user: null,
    };
  },
  created() {
    this.getFaculty();
  },
  beforeRouteUpdate(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    console.log(to, from);
    this.id = to.params.id;
    next();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    navigateto() {
      this.$router.push({
        name: 'department',
        params: { dept: this.user.dept },
      });
    },
    async getFaculty() {
      const id = this.id;
      try {
        const { data } = await axios.get(
          `https://dfdirectory.azurewebsites.net/api/v1/faculty/${id}`
        );
        console.log(data);
        this.user = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
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

.contacts {
  display: flex;
  width: 100%;
}
</style>
