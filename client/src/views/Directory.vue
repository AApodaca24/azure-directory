<template>
  <div class="center">
    <h1>Directory</h1>
    <main>
      <router-view />
  </main>
  </div>
</template>

<script>
export default {
  name: "Directory",
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped></style>
