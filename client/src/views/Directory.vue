<template>
  <div class="center">
    <main>
      <router-view />
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
};
</script>

<style scoped></style>
