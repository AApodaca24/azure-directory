<template>
  <div class="center">
    <main>
      <router-view v-on:activeRecord="setActive" :active="active"/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Directory',
  props: {
    isAuth: Boolean,
    User: Object,
    token: String,
  },
  data: () => ({
    active: null,
  }),
  methods: {
    setActive(faculty) {
      console.log(faculty)
      this.active = faculty[0]
    }
  }
};
</script>

<style scoped></style>
